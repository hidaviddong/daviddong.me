import { codeToHtml } from 'shiki'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
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

  const html3 = await codeToHtml(`function generatePairs(arr:string[]) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push(\`\${ arr[i]}-\${ arr[j]}\`);
        }
    }
    return pairs;
}`, {
    lang: 'ts',
    theme: 'vitesse-light'
  });

  const html4 = await codeToHtml(`function generatePairs(arr:string[]) {
    const pairs:string[] = []

    function recursiveGenerate(currentIndex:number, currentPair:string[]) {
        if (currentPair.length === 2) {
            pairs.push(currentPair.join('-'));
            return;
        }

        for (let i = currentIndex; i < arr.length; i++) {
            recursiveGenerate(i + 1, [...currentPair, arr[i]]);
        }
}
recursiveGenerate(0, []);
return pairs;
}`, {
    lang: 'ts',
    theme: 'vitesse-light'
  });




  const html5 = await codeToHtml(
    `type ElectrodeKeys = ['A','B','C']\ntype CombKeys<T extends string[]> =\n T extends [infer F extends string, ...infer R extends string[]] 
      ? \`\${F}-\${R[number]}\` | CombKeys<R> 
      : never\ntype CombElectrodeKeys = CombKeys<ElectrodeKeys>`, {
    lang: 'ts',
    theme: 'vitesse-light',
    transformers: [
      transformerTwoslash({
        renderer: rendererRich()
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
    html5,
    blog
  }
}