import { codeToHtml } from 'shiki'
import { rendererRich,transformerTwoslash} from '@shikijs/twoslash'
import { Blog } from "@/config"
export async function data(pageContext) {
  const html = await codeToHtml(`type ElectrodeKeys = 'A'|'B'|'C'`, {
    lang: 'ts',
    theme: 'vitesse-light'
  });

  const html2 = await codeToHtml(`type ElectrodeKeys = 'A'|'B'|'C'|'A-B'|'A-C'|'B-C'`, {
    lang: 'ts',
    theme: 'vitesse-light'
  });


    const html3 = await codeToHtml(`type ElectrodeKeys = ['A','B','C']`, {
      lang: 'ts',
      theme: 'vitesse-light'
    });
  
    const html4 = await codeToHtml(
      `
      type ElectrodeKeys = ['A','B','C']
      type CombKeys<T extends string[]> = 
      T extends [infer F extends string, ...infer R extends string[]] 
      ? \`\${F}-\${R[number]}\` | CombKeys<R> 
      : never
      type CombElectrodeKeys = CombKeys<ElectrodeKeys> | ElectrodeKeys[number]
      `,{
        lang:'ts',
        theme:'vitesse-light',
        transformers:[
          transformerTwoslash({
            renderer:rendererRich()
          })
        ]
      }

    )
  const blog = Blog.find((blog) => blog.href === pageContext.urlParsed.pathname)
  return {
    html,
    html2,
    html3,
    html4,
    blog
  }
}