import Comments from "./assets/comments.gif";
export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">Comments</p>
				<p className="my-0">2023 · Maintainer</p>
			</div>
			<p>Add comments to your website.</p>
			<div className="flex flex-col justify-center items-center">
				<img
					src={Comments}
					alt="comments"
					className="bg-gray-50 border rounded-md my-0"
					width={800}
					height={495}
				/>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<p
					className="my-0 mt-4 text-sm font-medium hover:underline hover:cursor-pointer"
					onClick={() => {
						window.location.href = "https://github.com/DongHY1/comments";
					}}
				>
					Comments
				</p>
			</div>
		</div>
	);
}
