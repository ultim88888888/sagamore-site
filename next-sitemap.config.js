/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.sagamorefinancialgroup.com",
  generateRobotsTxt: false, // We maintain robots.txt manually in /public
  outDir: "public",
  exclude: ["/icon.png", "/api/*"],
  changefreq: "monthly",
  priority: 0.8,
  transform: async (_config, path) => {
    // Homepage
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Legal pages
    if (path === "/privacy" || path === "/terms") {
      return {
        loc: path,
        changefreq: "yearly",
        priority: 0.3,
        lastmod: new Date().toISOString(),
      };
    }

    // Services overview and individual product pages
    if (path.startsWith("/services")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: path === "/services" ? 0.9 : 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // About, Contact, Apply
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
