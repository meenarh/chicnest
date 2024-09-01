ChicNest

## Overview

ChicNest is a product listing ecommerce website where users can view a list of products. Users can also add, edit or delete products. The website also has an add to cart feature that allows users to add products to a cart, and view the cart.

In this project, SEO was handled through several key practices to ensure better visibility and ranking in search engines. Here's a brief overview:

Meta Tags and Title Tags:

Dynamic Metadata: Each page, including the homepage, product listing, and product details pages, uses dynamic metadata defined in the layout.tsx file or individual page components. This includes setting <title> and <meta> tags using the next/head component to provide relevant information for search engines.
Open Graph Tags:

Social Media Optimization: Open Graph tags are included to enhance how the content appears when shared on social media platforms. This is handled by adding appropriate <meta property="og:*" content="*"/> tags in the <Head> section of each page to control the appearance of links.
Dynamic SEO Content:

Product Pages: The SEO content for each product page is dynamically generated based on the product's details, such as its title, description, and other relevant information. This is achieved by setting the meta tags dynamically within the product details page component.
Sitemap and robots.txt:

Sitemap: A sitemap file is created to help search engines index the pages of the website more efficiently. This file lists all the important pages and is typically located at /sitemap.xml.
robots.txt: A robots.txt file is configured to guide search engine crawlers on which pages or sections of the site should be crawled or avoided. This helps in managing the indexing of the site.

Mobile Optimization:
Responsive Design: The website is optimized for mobile devices using Tailwind CSS's utility-first approach to ensure that the site looks and performs well on various screen sizes. This includes responsive layouts and media queries to adjust content presentation.
Performance Optimization:

Page Load Speed: Techniques such as lazy loading images and using Next.js's built-in image optimization help in reducing page load times, which is beneficial for both SEO and user experience.

## How to set up and run app locally

- Clone the repository from 'https://github.com/meenarh/chicnest/' onto your computer.
- Open cloned project with Visual Studio Code or any preffered code editor.
- Using the terminal, run `npm install` or `npm i` to install necessary dependencies.
- Run `npm run dev` to start the localhost server.
- The application will run on 'localhost:3000', click on the link in your terminal or type it in your browser.

