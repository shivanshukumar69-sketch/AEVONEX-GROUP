# AEVONEX GROUP — Website

Static site: HTML5, CSS3, vanilla JavaScript. No build step, no dependencies (fonts load from Google Fonts with system fallbacks).

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000` then visit http://localhost:8000.

## Before launch
1. **Domain:** every canonical, Open Graph and sitemap URL uses the placeholder `https://www.example.com`. Find and replace it with your real domain across `*.html` and `seo/*`.
2. **Contact form:** open `js/main.js` and set `FORM_ENDPOINT` to your email service endpoint (for example a Formspree form URL). Until then the form validates but shows that delivery is not configured.
3. **Contact details:** replace the email and social placeholders in `contact.html` once they are confirmed.
4. **Images:** the architectural images are generated SVG artwork. Replace with licensed photography (WebP/AVIF, with width/height) in `assets/images/`; an optional hero video can go in `assets/videos/`.
5. **Social image:** replace `social/og-image.jpg` with final 1200 x 630 artwork.
6. **Root files:** search engines expect `/robots.txt` and `/sitemap.xml` at the site root. Copy them from `seo/` to the web root when deploying (see SEO-SETUP.md).

## Notes
- Ventures are presented as areas of interest, not operating companies.
- Animations respect `prefers-reduced-motion`.
- `404.html` is included (noindex); configure your host to serve it for missing pages.
