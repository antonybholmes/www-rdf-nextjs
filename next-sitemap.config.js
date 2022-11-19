/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.rdflab.org",
  generateRobotsTxt: true, // (optional)
  // ...other options
}
