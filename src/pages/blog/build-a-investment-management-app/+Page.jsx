import { useData } from "vike-react/useData"

export default function Page() {
    const { blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className=" text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>
            <div className="mt-4">
                <p className="">I have been learning to investment for a year now.</p>
                <ul className="mt-0">
                    <li>I bought some cryptocurrencies using OKEX.</li>
                    <li>I bought some index funds using IBKR.</li>
                    <li>I bought some stocks using Longbridge.</li>
                    <li>I still have some savings in the bank.</li>
                </ul>
            </div>
            <p>It would be great if there was an app that could manage these investmentments.</p>
            <p>It needs to:</p>
            <ul className="mt-0">
                <li>
                    Record your total assets.
                </li>
                <li>
                    Have a simple and beautiful UI/UX.
                </li>
                <li>
                    Automation.
                </li>
                <li>
                    ...
                </li>
            </ul>
            <p>It doesn't need to:</p>
            <ul className="mt-0">
                <li>
                    Have a ChatGPT-like conversation feature.
                </li>
                <li>
                    ( I can't remember it at the moment. )
                </li>
            </ul>
            <p>Unfortunately, I haven't found any software that meets my requirements yet.</p>
            <p>If I decide to do this App, I would like to remind myself:</p>
            <ul className="mt-0">
                <li>Keep the functions simple and easy to use.</li>
                <li>Think about what to include in a membership version.</li>
                <li>Do not open source it.</li>
                <li>Build in public.</li>
            </ul>
        </div>
    )
}
