---
title: Introducing NIFTY
summary: Near-Infrared Fitting for T- and Y-Dwarfs
date: 2026-05-01

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'My fun NIFTY logo, with the tiny brown dwarf'

authors:
  - admin

tags:
  - Brown Dwarfs
  - Open-Source Software

---

Given the excitement over the discovery of [many](https://ui.adsabs.harvard.edu/abs/arXiv:2309.03250), [many](https://ui.adsabs.harvard.edu/abs/2025arXiv251000111H/abstract) brown dwarfs across extragalacti observations made with JWST, I worked with my former graduate student [Jakob Helton](https://jakobhelton.github.io/) to write NIFTY: Near-Infrared Fitting for T- and Y-Dwarfs, a Bayesian/MCMC fitter that works with both near-to-mid IR photometry (primarily from JWST/NIRCam and MIRI) and NIRSpec prism spectroscopy. [The software, hosted on GitHub](https://github.com/kevinhainline/NIFTY), compares the observed data to three brown dwarf model sets (Sonora Elf Owl, LOWZ, and ATMO2020++), with more coming.  You can read more about the software in [this paper](https://ui.adsabs.harvard.edu/abs/2025arXiv251000111H/abstract). It was designed to run quickly and efficiently, producing fits, corner plots, and output parameter, with uncertainties. Please email me if you have any questions or comments about the software! 