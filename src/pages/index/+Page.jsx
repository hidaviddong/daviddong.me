import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Tag } from "@/components/ui/tag";
import { OpenSourceProjects, Works } from "@/config/project";
const ProjectLists = ({ title, items }) => (
	<section>
		<h3>{title}</h3>
		<BentoGrid className="md:grid-rows-3">
			{items.map((feature) => (
				<BentoCard key={feature.name} {...feature} />
			))}
		</BentoGrid>
	</section>
);

export default function Page() {
	return (
		<article className="prose prose-p:text-neutral-500 p-12">
			<h1>Hey, I'm Haoyu</h1>
			{/* about me */}
			<section>
				<div className="text-neutral-500">
					You can call me David. I'm a software engineer and previously worked at
					<Tag text="Tencent Music" tooltip="Intern Software Developer from May 2022 to Oct 2022" />
					and
					<Tag
						text="Peking University Institute"
						tooltip="Junior Software Developer from Jul 2023 to Jul 2024"
					/>
					.
				</div>
				<br />
				<div className="text-neutral-500">
					In my free time, I usually
					<Tag text="play guitar" tooltip="R&B, Neo Soul, Gospel" />
					and
					<Tag text="watch movies" tooltip="Thriller, Tragicomedy" />. My favorite director is Woody
					Allen.
				</div>
				<p>
					Recently, I moved to Hong Kong and am seeking a software development position. Please feel
					free to contact me!
				</p>
			</section>
			<ProjectLists title="Works" items={Works} />
			<ProjectLists title="Open Source Projects" items={OpenSourceProjects} />
		</article>
	);
}
