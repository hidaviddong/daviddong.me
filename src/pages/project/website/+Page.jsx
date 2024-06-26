import { Image } from "@/components/ui/image";
import { codeToHtml } from 'shiki'

const code = `export const useImageMeta = (src) => {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const fetchImageMeta = async () => {
      if (!src) return;
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const arrayBuffer = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          reader.readAsArrayBuffer(blob);
        });
        const uint8Array = new Uint8Array(arrayBuffer);
        const meta = imageMeta(uint8Array);
        if (meta.width && meta.height) {
          setDimensions({ width: meta.width, height: meta.height });
        }
      } catch (error) {
        console.error("Failed to load image metadata:", error);
        setDimensions({ width: undefined, height: undefined });
      }
    };
    fetchImageMeta();
  }, [src]);
  return dimensions;
};`
const html = await codeToHtml(code, {
	lang: 'javascript',
	theme: 'vitesse-light'
})

export default function Page() {
	return (
		<article className="prose p-12">
			<div className="flex flex-col">
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
							className="bg-gray-50 border rounded-md my-0"
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
					<div className="flex flex-col space-y-4">
						<Image
							src="/images/image-optimization.webp"
							alt="image-optimization"
							className="bg-gray-50 border rounded-md my-0 w-full"
						/>
						{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
						<div className="border rounded-md" dangerouslySetInnerHTML={{ __html: html }} />
					</div>

					<p className="my-0 mt-4 text-sm font-medium">Image Optimization</p>
					<p className="my-0 text-neutral-400 text-sm">
						Size optimization, automatically determine image width and height .
					</p>
				</div>
			</div>
		</article>

	);
}
