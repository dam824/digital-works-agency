/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://digital-works.org',  
    generateRobotsTxt: true,  
    sitemapSize: 5000,  
    exclude: ['/admin', '/private'],  
    additionalPaths: async (config) => [
      { loc: '/a-propos', changefreq: 'monthly', priority: 0.8 },
      { loc: '/consulting', changefreq: 'weekly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
      { loc: '/creation-web', changefreq: 'weekly', priority: 0.9 },
      { loc: '/', changefreq: 'daily', priority: 1.0 }, // Page d'accueil
      { loc: '/project-sodelicious', changefreq: 'monthly', priority: 0.7 },
      { loc: '/projects', changefreq: 'weekly', priority: 0.8 },
      { loc: '/projet-nanterredom', changefreq: 'monthly', priority: 0.7 },
      { loc: '/solution-sur-mesure', changefreq: 'weekly', priority: 0.9 },
    ],
  };
  