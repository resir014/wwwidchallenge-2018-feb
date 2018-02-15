---
layout: page
title: "About this website"
---

Hey there!

This website was created by [@resir014](https://github.com/resir014) as part of the [#WWWIDChallenge](https://medium.com/wwwid/tantangan-web-developer-untuk-membuat-aplikasi-web-bisa-digunakan-kurang-dari-5-detik-70bb7431741d) for February 2018.

The challenge was to create a Progressive Web App (PWA) that can load in less than 5 seconds. I was free to choose any framework/library as long as it's usable via all modern browsers. The website consists of a homepage with latest feeds, an article view, and category filters.

I decided to go the [JAMstack](https://jamstack.org/) path using [Gatsby.js](https://www.gatsbyjs.org/). The basic PWA setup for Gatsby is to use `gatsby-plugin-manifest` and `gatsby-plugin-offline`, and further optimizations are done during the build process, such as image processing with Sharp, complete with lazyloading of image thumbnails with `gatsby-image`.

I also use [TypeScript](https://www.typescriptlang.org/), because it's awesome.

To view the source code, [click here](https://github.com/resir014/wwwidchallenge-2018-feb).
