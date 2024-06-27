import Code from "@/components/ui/code";
import { Image } from "@/components/ui/image";
import { useData } from 'vike-react/useData'
export default function Page() {
	const { generatedHtml, project } = useData()
	return (
		<div className="flex flex-col w-full">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0 text-zinc-700">{project.name}</p>
				<p className="my-0 text-zinc-500 text-sm">{project.time} · {project.description}</p>
			</div>
			<p>My Personal Website.</p>
			<div className="flex flex-col justify-center items-center">
				<div className="flex max-w-full w-3/4">
					<Image
						src="/images/daviddong-mobile.webp"
						alt="daviddong-mobile"
						className="bg-gray-50 my-0"
					/>
				</div>

				<a
					aria-label="David Dong's GitHub Website"
					className="no-underline my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
					href="https://github.com/DongHY1/daviddong.me"
				>
					daviddong.me
				</a>
			</div>
			<div className="flex flex-col justify-center items-center mt-4">
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

			<div className="flex flex-col justify-center items-center mt-4">
				<div className="flex flex-col justify-center items-center space-y-4 w-full ">
					<Image
						src="/images/image-optimization.webp"
						alt="image-optimization"
						className="bg-gray-50 border rounded-md my-0 w-full"
					/>
					<Code html={generatedHtml} />
				</div>
				<p className="my-0 mt-4 text-sm font-medium">Image Optimization</p>
				<p className="my-0 text-zinc-500 text-sm">
					Size optimization, automatically determine image width and height .
				</p>
			</div>

			<div className="flex flex-col justify-center items-center mt-4">
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
