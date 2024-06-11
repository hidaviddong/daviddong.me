
import { defineConfig } from 'vite'
export default defineConfig({
    plugins:[{
        ...injectHtmlScript(),
        enforce:'post',
        apply:'build'
    }]
})

function injectHtmlScript(){
    return {
        name: 'inject-html-script',
      async transformIndexHtml(html){
        return {
            html,
            tags: [
                {
                  tag: 'script',
                  attrs: {
                    defer: true,
                    src: 'https://static.cloudflareinsights.com/beacon.min.js',
                    'data-cf-beacon': '{"token": "50c16752858d4f0fb9f9d6cc3bcfbd05"}'
                  },
                  injectTo: 'body'
                }
              ]
        }
    }
}
}