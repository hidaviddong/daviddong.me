import { Image } from "@/components/ui/image";
import { useData } from 'vike-react/useData'
export default function Page() {
	const { project } = useData()
	return (
		<div className="flex flex-col w-full">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0 text-zinc-700">{project.name}</p>
				<p className="my-0 text-zinc-500 text-sm">{project.time} · {project.description}</p>
			</div>
			<p>My personal website, build from scratch using Vike SSG and React</p>

			<div className="flex flex-col justify-center items-center my-4">
				<div className="flex max-w-full">
					<Image
						src="/images/daviddong-mobile.webp"
						alt="daviddong-mobile"
						className="bg-gray-50 my-0"
					/>
				</div>

				<a
					aria-label="David Dong's GitHub Website"
					className="no-underline my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
					href="https://github.com/hidaviddong/daviddong.me"
				>
					daviddong.me
				</a>
			</div>

			<div className="flex flex-col justify-center items-center  my-4">
				<Image
					src="/images/puppeteer.webp"
					alt="puppeteer"
					className="bg-gray-50 border rounded-md my-0"
				/>
				<p className="my-0 mt-4 text-sm font-medium">Puppeteer</p>
				<p className="my-0 text-zinc-500 text-sm">
					Use Puppeteer and GitHub Actions to automatically scrape the latest resume.
				</p>
			</div>

			<div className="flex flex-col justify-center items-center my-4">
				<div className="flex flex-col justify-center items-center space-y-4 w-full ">
					<Image
						src="/images/image-optimization.webp"
						alt="image-optimization"
						className="bg-gray-50 border rounded-md my-0 w-full"
					/>
				</div>
				<p className="my-0 mt-4 text-sm font-medium">Image Optimization</p>
				<p className="my-0 text-zinc-500 text-sm">
					Image Size optimization.
				</p>
			</div>

			<div className="flex flex-col justify-center items-center  my-4">
				<div className="flex flex-col justify-center items-center space-y-4 w-full ">
					<Image
						src="/images/og/nand2tetris.webp"
						alt="image-optimization"
						className="bg-gray-50 border rounded-md my-0 w-full"
					/>
				</div>
				<p className="my-0 mt-4 text-sm font-medium">OG Image</p>
				<p className="my-0 text-zinc-500 text-sm">
					Automatically generate OG images for blog posts.
				</p>
			</div>


			<div className="flex flex-col justify-center items-center  my-4">
				<Image
					src="/images/pagespeed.webp"
					alt="pagespeed"
					className="bg-gray-50 border rounded-md my-0 w-full"
				/>
				<p className="my-0 mt-4 text-sm font-medium">PageSpeed</p>
				<p className="my-0 text-zinc-500 text-sm">
					Full marks on all metrics in PageSpeed.
				</p>
			</div>

		</div>

	);
}
