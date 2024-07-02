import { useData } from "vike-react/useData";
export default function Page() {
    const { project } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="my-0 text-zinc-700">{project.name}</p>
                <p className="my-0 text-zinc-500 text-sm">{project.time} · {project.description}</p>
            </div>
            <div className="flex flex-col space-y-12 mt-4">
                <div className="flex flex-col justify-center items-center">
                    <iframe
                        scrolling="no"
                        src="https://react.daviddong.me"
                        title="react"
                        className="w-full h-72 border rounded-md overflow-hidden"
                    />
                    <a
                        aria-label="David Dong's GitHub project Mini-react"
                        className="no-underline my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
                        href="https://github.com/DongHY1/Mini-React"
                    >
                        Mini React Website
                    </a>
                </div>
            </div>
        </div>

    );
}
