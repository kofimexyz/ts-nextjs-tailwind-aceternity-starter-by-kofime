/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://kofime.xyz */
  siteUrl: 'https://kofime.xyz',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
