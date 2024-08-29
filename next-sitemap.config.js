/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: process.env.SITE_URL || 'https://www.chicnest.com', 
   generateRobotsTxt: true,
   exclude: ['/admin/*'],
   robotsTxtOptions: {
     policies: [
       { userAgent: '*', allow: '/' },
       { userAgent: '*', disallow: '/admin' },
     ],
   },
 };
 