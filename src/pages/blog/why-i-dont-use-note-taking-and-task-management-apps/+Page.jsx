import { useData } from "vike-react/useData"
export default function Page() {
    const { blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className=" text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>

            <h4>1</h4>
            <p>
                I used to love taking notes. I would copy and paste my code snippets and highlighting them to make the note look cool.

            </p>
            <p>But when would I look at them again? Are these notes really useful to me?</p>

            <h4>2</h4>
            <p>
                Successful people share their time management secrets in books:
                <ul>
                    <li>9 AM to 10 AM: Reading.</li>
                    <li>10 AM to 12 AM: Working on a project.</li>
                    <li>2 AM to 3 AM: Fly to London for a academic conference.</li>
                </ul>
            </p>
            <p>I used to believe this and tried to precisely manage my time with todo list and calendar apps.</p>
            <p>But time is unpredictable. At 10 AM, you might be invited to join a meeting, interrupting your reading time.</p>
            <p>What should you do next？Pretend you read at 10 AM and mark it as completed on your todo list to avoid being unable to sleep due to anxiety? Or will you push this task for tomorrow, repeating the cycle?</p>

            <h4>3</h4>
            <p>Don't be a hamster. Don't copy others' opinions. Share your own thoughts.</p>
            <h4>4</h4>
            <p>Only write down the most important tasks for tomorrow and get them done. Which app do you open every day? Record them in this app.</p>
        </div>

    )
}
