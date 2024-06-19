import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { MusicIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { SideProjects, Works } from "@/config/project";
import { navigate } from "vike/client/router";
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
					In my free time, I usually play guitar and watch movies. You can watch my
					<Badge
						variant="outline"
						className="px-2 mx-1 text-sm hover:cursor-pointer"
						onClick={() => {
							navigate("/music");
						}}
					>
						🎸 music video
					</Badge>
					and view my favorite
					<Badge
						variant="outline"
						className="px-2 mx-1 text-sm hover:cursor-pointer"
						onClick={() => {
							navigate("/list");
						}}
					>
						📃 art list
					</Badge>
				</div>
				<p>
					I recently moved to Hong Kong and am actively seeking a software development position.
					Feel free to reach out to me!
				</p>
				<p>
					Email me at{" "}
					<span className="font-mono text-neutral-800 hover:underline hover:underline-offset-2">
						hi@daviddong.me
					</span>
				</p>
			</section>
			<ProjectLists title="Works" items={Works} />
			<ProjectLists title="Side Projects" items={SideProjects} />
		</article>
	);
}
