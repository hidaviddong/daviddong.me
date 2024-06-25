export { onRenderHtml }

import { parse } from 'node-html-parser';
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import LayoutDefault from './Layout.jsx'
import { imageMeta } from "image-meta";
import { readFile } from 'node:fs/promises';
async function onRenderHtml(pageContext) {
  const { Page } = pageContext
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <LayoutDefault>
        <Page />
      </LayoutDefault>
    )
  )
  const root = parse(viewHtml._escaped);
  const imgTags = root.querySelectorAll('img');

  for (const img of imgTags) {
    const imgUrl = img.getAttribute('src');
    try {
      const data = await readFile(`public${imgUrl}`)
      const { width, height } = imageMeta(data);
      img.setAttribute('width', width)
      img.setAttribute('height', height)
    } catch (error) {
      console.error('Error reading the image file:', error);
    }
  }
  viewHtml._escaped = root.toString()
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>daviddong.me</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="David Dong" />
        <meta
          name="description"
          content="Showcasing David Dong's projects, blogs, and contact information."
        />
        <meta name="keywords" content="David Dong, personal website, projects, blogs, contact" />
        <meta property="og:title" content="David Dong's Personal Website" />
        <meta
          property="og:description"
          content="Showcasing David Dong's projects, blogs, and contact information."
        />
        <meta property="og:image" content="https://daviddong.me/og.webp" />
        <meta property="og:url" content="https://daviddong.me" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="David Dong's Personal Website" />
        <meta
          name="twitter:description"
          content="Showcasing David Dong's projects, blogs, and contact information."
        />
        <meta name="twitter:image" content="https://daviddong.me/og.webp" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="cd394c16-728f-4cc8-88cc-a17c369439cc"
        ></script>
      </head>
      <body>
        <div id="app">${viewHtml}</div>
      </body>
    </html>`
}