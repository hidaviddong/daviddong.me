import { Image } from "@/components/ui/image";
export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">Comments</p>
				<p className="my-0">2023 · Maintainer</p>
			</div>
			<p>Add comments to your website.</p>
			<div className="flex flex-col justify-center items-center">
				<Image
					src="/images/comments.gif"
					alt="comments"
					className="bg-gray-50 border rounded-md my-0"
				/>
				<a
					className="no-underline my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
					href="https://github.com/DongHY1/comments"
				>
					Comments
				</a>
			</div>
		</div>

	);
}
