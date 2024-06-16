import { Tag } from "@/components/ui/tag";
export default function Page() {
	return (
		<article className="prose prose-p:text-neutral-500 p-12">
			<h1>Hey, I'm Haoyu</h1>
			<div>
				You can call me David. I'm a software engineer and previously worked at
				<Tag text="Tencent Music" tooltip="Intern Software Developer from May 2022 to Oct 2022" />
				and
				<Tag text="Peking University Institute" tooltip="Junior Software Developer from Jul 2023 to Jul 2024" />
				.
			</div>
			<div>
				In my free time, I usually
				<Tag text="play guitar" tooltip="R&B, Neo Soul, Gospel" />
				,and
				<Tag text="watch movies" tooltip="Thriller, Tragicomedy" />
				. My favorite director is Woody Allen.
			</div>
			<p>
				Recently, I moved to Hong Kong and am seeking a software development position. Please feel
				free to contact me!
			</p>
		</article>
	);
}
