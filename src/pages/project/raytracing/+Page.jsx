import { Image } from "@/components/ui/image";
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
                    <Image
                        src="/images/raytracing.webp"
                        alt="model"
                        className="bg-gray-50 border rounded-md my-0"
                    />
                    <a
                        aria-label="David Dong's GitHub project Mini-react"
                        className="no-underline my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
                        href="https://github.com/hidaviddong/raytracing-js"
                    >
                        Raytracing Website
                    </a>
                </div>
            </div>
        </div>

    );
}
