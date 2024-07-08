import './style.css'
import Code from "@/components/ui/code"
import { useData } from "vike-react/useData"
export default function Page() {
    const { html, html2, html3, html4, blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className=" text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>
            <h4>Background</h4>
            <div className='flex flex-col justify-center space-y-4'>
                <p>
                    在我之前有关数据可视化的
                    <a
                        aria-label="Spectral Analysis"
                        variant="link"
                        className="mx-1 no-underline text-md text-zinc-500 hover:text-zinc-800 text-primary underline-offset-4 hover:underline"
                        href="/project/data-visualization"
                    >
                        Spectral Analysis
                    </a>
                    项目中，遇到了一个TypeScript类型的问题。
                </p>
                <p>
                    这是有关脑机接口的的项目，有许多不同编号的电极，例如 电极A，电极B，电极C。
                    我们可以很容易写出一个 TypeScript 类型来约束这些电极的 Key：
                </p>
                <Code dangerouslySetInnerHTML={{ __html: html }} />
                <p>但是这些电极是可以两两组合的，例如 A-B, A-C, B-C 作为 Key，为了解决这个问题，可以拓展ElectrodeKeys来实现。</p>
                <Code dangerouslySetInnerHTML={{ __html: html2 }} />
                <p>但是当 Key 数量增多时，这个列表会很难维护。</p>
            </div>

            <h4>Solution</h4>
            <div className='flex justify-center flex-col space-y-4'>
                <p>可以利用TypeScript的泛型来实现这一需求。首先，将所有的 Key 放到一个数组中。</p>
                <Code dangerouslySetInnerHTML={{ __html: html3 }} />
                <ul>
                    <li>将这个数组提取成两部分，A 和 B,C </li>
                    <li>继续将第二项这个数组提取成两部分，B 和 C </li>
                    <li>将 B 和 C 组合生成 B-C 作为新的 Key</li>
                    <li>将 A 和 B,C 组合生成 A-B,A-C 作为新的 Key</li>
                </ul>
                <p>在 TypeScript 中，可以用 infer 关键字来提取数组中的元素，按照上面的思路，可以写成</p>
                <Code className="p-0" dangerouslySetInnerHTML={{ __html: html4 }} />
            </div>
        </div>
    )
}
