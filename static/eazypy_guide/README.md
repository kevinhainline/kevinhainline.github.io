# EAZY-py User's Guide

A community-written practical guide to [eazy-py](https://github.com/gbrammer/eazy-py) — the Python photometric redshift code by Gabriel Brammer.

🌐 **Live site:** https://[yourusername].github.io/eazy-guide/

## About

This guide covers:
- Installation and setup
- How the fitting works (conceptually)
- Catalog format requirements
- Parameter file field-by-field guide
- Understanding `z_ml`, `z_best`, `z_phot` and their differences
- The `lnp` array and P(z) distributions
- Priors (magnitude and beta)
- The template error function (TEF)
- Running `standard_output` and interpreting the `zout` table
- Iterative zeropoint corrections
- Template sets
- Visualization tools
- Common pitfalls and tips
- Internal attributes reference

## How to Edit

The entire site is a single `index.html` file with accompanying `style.css` and `main.js`. To update content:

1. Edit `index.html` directly — each section is clearly delimited with HTML comments
2. Each `<section id="sN">` block corresponds to one guide section
3. Add new sections by copying an existing `<section>` block, incrementing the ID, and adding a label to the `navLabels` object in `main.js`

## Hosting on GitHub Pages

1. Fork or clone this repo
2. Go to **Settings → Pages** in your GitHub repo
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save** — your site will be live at `https://[yourusername].github.io/[reponame]/`

No build step required. Pure HTML/CSS/JS.

## Citation

If you use eazy-py in published work, please cite:
- [Brammer, van Dokkum & Coppi (2008), ApJ, 686, 1503](https://ui.adsabs.harvard.edu/abs/2008ApJ...686.1503B/abstract)
- The eazy-py Zenodo repository (see [GitHub](https://github.com/gbrammer/eazy-py) for BibTeX)
