# SEO Setup

Nothing here claims the site is indexed or ranked. Verify each step in the tools below.

1. **Set the domain.** Replace `https://www.example.com` in all HTML files and `seo/` files. Choose one canonical host (www or non-www) and redirect the other with a 301. Force HTTPS with a 301.
2. **Publish root files.** Copy `seo/robots.txt` and `seo/sitemap.xml` to the web root (`/robots.txt`, `/sitemap.xml`). Keep `seo/manifest.json` where it is (linked from every page) or move it and update the `<link rel="manifest">`.
3. **Google Search Console.** Add your domain property, verify via DNS TXT record, then submit `https://yourdomain/sitemap.xml` under Sitemaps. Use URL Inspection to request indexing of the home page.
4. **Bing Webmaster Tools.** Add the site (or import from Search Console) and submit the same sitemap.
5. **Google Analytics 4 (optional).** Create a GA4 property, then add Google's `gtag.js` snippet with your own Measurement ID to each page's `<head>` (load it `async`). No ID is included here.
6. **Structured data.** Each page embeds Organization, WebSite and WebPage JSON-LD. Only the name, tagline and URL are stated. Add verified details (contact, social profiles, founding date) only when confirmed. Test with Google's Rich Results Test.
7. **Social previews.** Replace `social/og-image.jpg` and test with the Facebook Sharing Debugger and a Card validator.
8. **Performance.** Run Lighthouse and PageSpeed Insights after deployment and fix what they report. Add long-cache headers for `/css`, `/js`, `/assets`.
9. **Status codes.** 200 for pages, 301 for host/HTTPS redirects, 404 for missing pages (serve `404.html`).
