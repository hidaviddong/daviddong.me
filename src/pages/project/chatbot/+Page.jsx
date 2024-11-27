import { Image } from "@/components/ui/image";
import { useData } from "vike-react/useData";
export default function Page() {
  const { project } = useData();
  return (
    <div className="flex flex-col">
      <div className="font-medium text-base flex flex-col gap-1">
        <p className="my-0 text-zinc-700">{project.name}</p>
        <p className="my-0 text-zinc-500 text-sm">
          {project.time} · {project.description}
        </p>
      </div>
      <p>Developed a chat application in medical field.</p>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col justify-center items-center">
          <div className="space-y-4">
            <Image
              src="/images/chat-page-main.webp"
              className="bg-gray-50 border rounded-md my-0"
              alt="chat-page-main"
            />
            <Image
              src="/images/chat-page-dialog.webp"
              className="bg-gray-50 border rounded-md my-0"
              alt="chat-page-dialog"
            />
          </div>

          <p className="my-0 mt-4 text-sm font-medium">Chat Page</p>
          <p className="my-0 text-zinc-500 text-sm">
            You can view previous conversations or start a new one.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/plugin.webp"
            alt="plugin"
            className="bg-gray-50 border rounded-md my-0"
          />
          <p className="my-0 mt-4 text-sm font-medium">Plugin System</p>
          <p className="my-0 text-zinc-500 text-sm">
            Different roles have different plugins.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/chat-page-image.webp"
            alt="chat-page-image"
            className="bg-gray-50 border rounded-md my-0"
          />
          <p className="my-0 mt-4 text-sm font-medium">Multimodal</p>
          <p className="my-0 text-zinc-500 text-sm">
            Model can understand images.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/literature-search.webp"
            alt="literature-search"
            className="bg-gray-50 border rounded-md my-0"
          />
          <p className="my-0 mt-4 text-sm font-medium">Literature Search</p>
          <p className="my-0 text-zinc-500 text-sm">
            Cite literature in conversations.
          </p>
        </div>
      </div>
    </div>
  );
}
