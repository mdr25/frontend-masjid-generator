import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import templateRegistry from "../../templates/registry";
import { authService } from "../../services/apiClient";

const PreviewPage = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetching data from "SiteConfig" or Profile
    // simplified: get current user profile
    const user = authService.getCurrentUser();
    if (user) {
      const profiles = JSON.parse(localStorage.getItem("mid_profiles") || "[]");
      const profile = profiles.find((p) => p.userId === user.id) || {
        name: "Preview Masjid",
        templateId: "template-1",
      };

      // Fetch Modules
      const prayers = JSON.parse(localStorage.getItem("mid_prayer") || "null");
      const kajian = JSON.parse(localStorage.getItem("mid_kajian") || "[]");
      const articles = JSON.parse(localStorage.getItem("mid_articles") || "[]");
      const siteConfig = JSON.parse(
        localStorage.getItem("mid_site_config") || "{}"
      ); // Fetch Config

      // Construct full data object for template
      setConfig({
        profile: profile,
        prayer: prayers || {
          fajr: "04:30",
          dhuhr: "12:00",
          asr: "15:15",
          maghrib: "18:00",
          isha: "19:15",
        },
        programs: kajian.map((k) => ({
          id: k.id,
          title: k.title,
          image: k.image,
        })), // Map to simple format
        articles: articles.map((a) => ({
          id: a.id,
          title: a.title,
          summary: a.summary,
          date: a.date,
          image: a.image,
        })),
        ...siteConfig, // Spread site config (header, etc) to top level
        // ... other mock data
      });
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  // Default to template-1 if not set
  const TemplateComponent = templateRegistry["template-1"].component;

  return (
    <div>
      {TemplateComponent ? (
        <TemplateComponent data={config} />
      ) : (
        <div>Template not found</div>
      )}
    </div>
  );
};

export default PreviewPage;
