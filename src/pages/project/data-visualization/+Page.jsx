import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/ui/image";
import { useData } from "vike-react/useData";
export default function Page() {
	const { project } = useData()
	return (
		<div className="flex flex-col">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">{project.name}</p>
				<p className="my-0 text-zinc-400 text-sm">{project.time} · {project.description}</p>
			</div>
			<p>A series of data visualization projects.</p>
			<div className="flex flex-col space-y-12">
				<div className="flex flex-col justify-center items-center">
					<iframe
						scrolling="no"
						src="https://desktop.daviddong.me"
						title="desktop"
						className="w-full h-72 border rounded-md overflow-hidden"
					/>
					<a
						className="no-underline my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
						href="https://desktop.daviddong.me"
					>
						My Desktop Website
					</a>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/model.webp"
						alt="model"
						className="bg-gray-50 border rounded-md my-0"
					/>
					<p className="my-0 mt-4 text-sm font-medium">Model</p>
					<p className="my-0 text-zinc-400 text-sm">Create models in Blender.</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/baked.webp"
						alt="baked"
						className="bg-gray-50 border rounded-md my-0"
					/>
					<p className="my-0 mt-4 text-sm font-medium">Baked</p>
					<p className="my-0 text-zinc-400 text-sm">
						Baking in Blender to generate textures and improve loading performance.
					</p>
				</div>

				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/texture.webp"
						alt="texture"
						className="bg-gray-50 border rounded-md my-0"
					/>

					<p className="my-0 mt-4 text-sm font-medium">Texture & Shader</p>
					<p className="my-0 text-zinc-400 text-sm">
						Apply noise texture in the shader to generate a smoke effect.
					</p>
				</div>
				<Separator />

				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/map.gif"
						alt="map"
						className="bg-gray-50 border rounded-md my-0"
					/>
					<p className="my-0 mt-4 text-sm font-medium">Map</p>
					<p className="my-0 text-zinc-400 text-sm">Implement map interaction using ECharts.</p>
				</div>

				<Separator />

				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/eeg.gif"
						alt="EEG"
						className="bg-gray-50 border rounded-md my-0"
					/>
					<p className="my-0 mt-4 text-sm font-medium">Spectral Analysis</p>
					<p className="my-0 text-zinc-400 text-sm">An EEG Analysis editor website.</p>
				</div>
			</div>
		</div>

	);
}
