# [joeyqsa.dev](https://joeyqsa.dev)

My personal portfolio website showcasing projects, experience, and contact information.

## Tech Stack

- HTML / CSS
- [Eleventy](https://www.11ty.dev/) (Liquid templates) for static site generation
- Hosted on GitHub Pages, deployed via GitHub Actions
- Prettier + EditorConfig for formatting

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

## Scripts

| Script                 | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Serve with live reload at http://localhost:8080 |
| `npm run build`        | Build to `_site/`                               |
| `npm run format`       | Format everything with Prettier                 |
| `npm run format:check` | Verify formatting (runs in CI)                  |
| `npm run links`\*      | Check internal links in `_site/` (runs in CI)   |
| `npm run links:all`\*  | Check internal **and** external links           |

\* The link checks read from `_site/`, so run `npm run build` first.

## License

Source code — templates, CSS, and build config — is available under the [MIT License](LICENSE).

Site content is not covered by that license and remains © 2026 Joseph Siracusa, all rights reserved. This includes the project descriptions, images, and résumé PDF.
