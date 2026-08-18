# CompanyConnect Engineering Hub

This repository publishes the static GitHub Pages hub for CompanyConnect’s public, client-safe technical proof. It is not a replacement for [CompanyConnect.Tech](https://companyconnect.tech). The corporate site remains the commercial destination; this project exists to help technical buyers inspect architecture, proof repositories, system boundaries, trust documentation, and precise answers.

## Local verification

```bash
npm install --package-lock=false --ignore-scripts
npm run verify
```

The verifier confirms that every hub HTML page has essential metadata and structural content, local asset references resolve, and crawler assets exist. It does not claim visual review, third-party-link availability, accessibility certification, search ranking, or production conversion results.

## GitHub Pages

The `Deploy GitHub Pages` workflow publishes the `site/` directory. The intended project URL is:

`https://lloyd-lew.github.io/companyconnect-engineering-hub/`

## Editorial boundary

Public content must be client-safe, accurate, and evidence-linked. Do not add client data, customer names, credentials, raw exports, production links, invented results, testimonials, or certification claims. Refer to the [CompanyConnect Systems Portfolio public policy](https://github.com/Lloyd-Lew/companyconnect-systems-portfolio/blob/main/docs/public-portfolio-policy.md) before contributing.
