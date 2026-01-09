import axios from "axios";

// Create axios instance
const apiClient = axios.create({
  baseURL: "http://mock-api.local", // Placeholder
  headers: {
    "Content-Type": "application/json",
  },
});

// Mock Database Keys
const DB_KEYS = {
  USERS: "mid_users",
  PROFILES: "mid_profiles", // Mosque profiles
  TOKEN: "mid_auth_token",
  CURRENT_USER: "mid_current_user",
};

// --- MOCK INTERCEPTOR ---
// This intercepts requests to simulate a backend
apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(DB_KEYS.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Mock Logic for Routes
    const { config } = error;

    // AUTH: LOGIN
    if (config.url === "/auth/login" && config.method === "post") {
      const { email, password } = JSON.parse(config.data);
      const users = JSON.parse(localStorage.getItem(DB_KEYS.USERS) || "[]");
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const token = "mock-jwt-token-" + Date.now();
        localStorage.setItem(DB_KEYS.TOKEN, token);
        localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify(user));
        return { data: { token, user } };
      }
      return Promise.reject({
        response: {
          status: 401,
          data: { message: "Email atau password salah" },
        },
      });
    }

    // AUTH: REGISTER
    if (config.url === "/auth/register" && config.method === "post") {
      const { mosqueName, email, password } = JSON.parse(config.data);
      const users = JSON.parse(localStorage.getItem(DB_KEYS.USERS) || "[]");

      if (users.find((u) => u.email === email)) {
        return Promise.reject({
          response: { status: 400, data: { message: "Email sudah terdaftar" } },
        });
      }

      const newUser = {
        id: Date.now(),
        name: "Admin " + mosqueName,
        email,
        password,
        role: "admin",
        isSetupComplete: false,
      };
      users.push(newUser);
      localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));

      // Create default mock profile
      const profiles = JSON.parse(
        localStorage.getItem(DB_KEYS.PROFILES) || "[]"
      );
      profiles.push({
        id: newUser.id,
        userId: newUser.id,
        name: mosqueName,
        slug: mosqueName.toLowerCase().replace(/ /g, "-"),
        address: "",
        description: "Masjid yang makmur dan nyaman.",
        templateId: "template-1",
      });
      localStorage.setItem(DB_KEYS.PROFILES, JSON.stringify(profiles));

      return { data: { message: "Registrasi berhasil" } };
    }

    // AUTH: LOGOUT
    if (config.url === "/auth/logout" && config.method === "post") {
      localStorage.removeItem(DB_KEYS.TOKEN);
      localStorage.removeItem(DB_KEYS.CURRENT_USER);
      return { data: { message: "Logout berhasil" } };
    }

    // GENERIC DATA FETCHING (GET)
    if (config.method === "get") {
      // Handle other GET requests (Mocks)
      // Check for specific modules
      const urlParts = config.url.split("/");
      const resource = urlParts[1]; // e.g., 'dkm', 'jamaah'

      // Simple generic fetch for now
      const data = JSON.parse(localStorage.getItem(`mid_${resource}`) || "[]");
      return { data };
    }

    // If it's not a mock route, return the original error logic (or 404)
    return Promise.reject(error);
  }
);

export const authService = {
  login: (email, password) =>
    apiClient.post("/auth/login", { email, password }),
  register: (data) => apiClient.post("/auth/register", data),
  logout: () => apiClient.post("/auth/logout"),
  getCurrentUser: () => JSON.parse(localStorage.getItem(DB_KEYS.CURRENT_USER)),
  isAuthenticated: () => !!localStorage.getItem(DB_KEYS.TOKEN),
};

export default apiClient;
