import './style.css'
import Code from "@/components/ui/code"
import { useData } from "vike-react/useData"
export default function Page() {
    const { html, html2, html3, html4, html5, blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className=" text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>
            <h4>Background</h4>
            <div className='flex flex-col justify-center space-y-4'>
                <p>
                    In my previous
                    <a
                        aria-label="Spectral Analysis"
                        variant="link"
                        className="mx-1 no-underline text-md text-zinc-500 hover:text-zinc-800 text-primary underline-offset-4 hover:underline"
                        href="/project/data-visualization"
                    >
                        data visualization project
                    </a>
                    , I have a type issue.
                </p>
                <p>
                    This project is about spectral analysis. It has many electrodes with different labels, such as electrode A, B, C.
                </p>
                <p>You can write a TypeScript type to constrain these keys:</p>
                <Code dangerouslySetInnerHTML={{ __html: html }} />
                <p>But these electrodes can be combined in pairs. such as electeode A-B, A-C, B-C.</p>
                <p>Let's add more electrode like this below:</p>
                <Code dangerouslySetInnerHTML={{ __html: html2 }} />
                <p>However, as the number of keys increase, this type becomes hard to maintain.</p>

            </div>

            <h4>Solution</h4>
            <div className='flex justify-center flex-col space-y-4'>
                <p>What if this question is in JavaScript world?</p>
                <p>The first solution is to use a double loop: </p>
                <Code dangerouslySetInnerHTML={{ __html: html3 }} />
                <p>The second solution is to use recursive:</p>
                <Code className="p-0" dangerouslySetInnerHTML={{ __html: html4 }} />

                <p>It's easy to understanding the idea, in this type issue, we can use TypeScript generics to achieve.</p>
                <Code className="p-0" dangerouslySetInnerHTML={{ __html: html5 }} />
                <ul>
                    <li>T extends string[] means that the generic to accpet a string array.</li>
                    <li>Further check if T is an array with at least on element. If so, it destructures the first element as F and the rest as R.</li>
                    <li>CombKeys&lt;R&gt;: This is a recursive call to CombKeys to handle the remaining elements R.</li>
                    <li>: never：if T is not an array , the result is never.</li>
                </ul>
            </div>
        </div>
    )
}
