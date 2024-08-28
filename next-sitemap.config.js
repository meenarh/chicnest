/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: process.env.SITE_URL || 'https://www.homeaffairs.com',  // replace with your actual site URL
   generateRobotsTxt: true,  // (optional)
   // Exclude certain paths
   exclude: ['/admin/*'],
   robotsTxtOptions: {
     policies: [
       { userAgent: '*', allow: '/' },
       { userAgent: '*', disallow: '/admin' },
     ],
   },
 };
 