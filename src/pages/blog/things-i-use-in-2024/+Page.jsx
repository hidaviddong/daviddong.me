import { useData } from "vike-react/useData"
export default function Page() {
    const { blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className="text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>
            <h4>Hardware</h4>
            <ul>
                <li>
                    <p>MacBook Pro 13-inch, 2020</p>
                    <p className="text-sm text-zinc-500">The last Intel model of the MacBook Pro, which has helped me complete many projects, but now it overheats a bit.</p>
                </li>
                <li>
                    <p>iPad mini</p>
                    <p className="text-sm text-zinc-500">For gaming, reading, and watching videos, my favorite iPad model, very lightweight.</p>
                </li>
                <li>
                    <p>iPhone 13</p>
                    <p className="text-sm text-zinc-500">I like the Apple ecosystem, but recently the battery is not enough.</p>
                </li>
                <li>
                    <p>AirPods</p>
                    <p className="text-sm text-zinc-500">I don't need noise cancellation, and the Pro version hurts my ears, so I chose this one.</p>
                </li>
                <li>
                    <p>Apple TV</p>
                    <p className="text-sm text-zinc-500">Used with my projector.</p>
                </li>
                <li>
                    <p>HomePod mini</p>
                    <p className="text-sm text-zinc-500">A beautiful piece of home decor.</p>
                </li>
                <li>
                    <p>JMGO N1 Air</p>
                    <p className="text-sm text-zinc-500">A laser projector, I don't have high requirements for picture quality.</p>
                </li>
            </ul>
            <h4>Software</h4>
            <ul>
                <li>
                    <p>Raycast</p>
                    <p className="text-sm text-zinc-500">The best launcher on MacOS.</p>
                </li>
                <li>
                    <p>PowerToys</p>
                    <p className="text-sm text-zinc-500">I use it as an alternative to Raycast in the Windows ecosystem.</p>
                </li>
                <li>
                    <p>CleanShot X</p>
                    <p className="text-sm text-zinc-500">The most feature-rich screenshot app.</p>
                </li>
                <li>
                    <p>Shots</p>
                    <p className="text-sm text-zinc-500">A free website for taking screenshots with device frames.</p>
                </li>
                <li>
                    <p>VS Code</p>
                    <p className="text-sm text-zinc-500">The best IDE.</p>
                </li>
                <li>
                    <p>Arc</p>
                    <p className="text-sm text-zinc-500">The next-generation browser, very stylish.</p>
                </li>
            </ul>
            <h4>Subscriptions</h4>
            <ul>
                <li>
                    <p>ChatGPT Plus</p>
                    <p className="text-sm text-zinc-500">I can't live without it.</p>
                </li>
                <li>
                    <p>Apple Music</p>
                    <p className="text-sm text-zinc-500">I love its dynamic wallpapers.</p>
                </li>
                <li>
                    <p>iCloud+</p>
                    <p className="text-sm text-zinc-500">Why is there no 500GB option?</p>
                </li>
                <li>
                    <p>Infuse + Aliyundrive</p>
                    <p className="text-sm text-zinc-500">Great for watching movie with Apple TV.</p>
                </li>
                <li>
                    <p>Setapp</p>
                    <p className="text-sm text-zinc-500">A collection of subscription apps.</p>
                </li>
            </ul>
        </div>
    )
}
