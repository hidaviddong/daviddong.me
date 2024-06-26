import Code from "@/components/ui/code";
import { Image } from "@/components/ui/image";
import { useData } from 'vike-react/useData'
export default function Page() {
	const { generatedHtml } = useData()
	return (
		<div className="flex flex-col w-full">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">daviddong.me</p>
				<p className="my-0">2024 · Maintainer</p>
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

				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<p
					className="my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
					onClick={() => {
						window.location.href = "https://github.com/DongHY1/daviddong.me";
					}}
				>
					daviddong.me
				</p>
			</div>
			<div className="flex flex-col justify-center items-center mt-4">
				<Image
					src="/images/puppeteer.webp"
					alt="puppeteer"
					className="bg-gray-50 border rounded-md my-0"
				/>
				<p className="my-0 mt-4 text-sm font-medium">Puppeteer</p>
				<p className="my-0 text-neutral-400 text-sm">
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
				<p className="my-0 text-neutral-400 text-sm">
					Size optimization, automatically determine image width and height .
				</p>
			</div>

		</div>

	);
}
