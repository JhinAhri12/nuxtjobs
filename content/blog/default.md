---
title: "Setup Nuxt"
author: "@Light"
dates:
  published: "2023-02-07"
---

# Setup de mes projets nuxt

- Pour débuter le projet :

```shell
npx nuxi init <project-name>
```

```shell
yarn install
```

- Installer les lib externe :

```shell
yarn add @vueuse/nuxt
```

Ajouter le module @module aux modules dans la section nuxt.config.js

```shell
{  modules: [    '@nuxtjs/tailwindcss'  ]}
```

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  color: #0f5e59;
}
h1{
  margin-bottom:12px;
  font-size: 1.5rem;
}
code{
  background-color: #eee;
border-radius: 3px;
font-family: courier, monospace;
padding: 0 3px;
}
p{
margin: 10px 0;
padding: 5px;
border: 1px solid #999;
}
ul
{
  color: #15141aff;
font-size: 0.9rem;
line-height: 1.5;
}
li{
  list-style-type: circle;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>
