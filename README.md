# [joeyqsa.dev](https://joeyqsa.dev)

My personal portfolio website showcasing projects, experience, and contact information.

## Tech Stack

- HTML / CSS
- [Eleventy](https://www.11ty.dev/) (Liquid templates) for static site generation
- Hosted on GitHub Pages, deployed via GitHub Actions

## Features

- Responsive design for mobile and desktop
- SEO optimized with structured data (Schema.org) and a generated sitemap
- Accessible markup with ARIA labels

## Project Structure

    src/
      _data/          # projects & socials data
      _includes/      # icons.liquid (SVG defs)
      assets/         # fonts, images, documents
      index.liquid    # root page, Liquid-templated
      sitemap.liquid  # generated from page collections
    eleventy.config.js

## Run Locally

```bash
git clone https://github.com/Joeweh/Joeweh.github.io.git
cd Joeweh.github.io
npm i
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080).

To build without serving:

```bash
npm run build   # outputs to _site/
```

## License

Source code — templates, CSS, and build config — is available under the [MIT License](LICENSE).

Site content is not covered by that license and remains © 2026 Joseph Siracusa, all rights reserved. This includes the project descriptions, images, and résumé PDF.
