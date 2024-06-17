import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Tag } from "@/components/ui/tag";
const Works = [
	{
		name: "Large Language Model",
		description: "Medical field chat application.",
		href: "/project/llm",
		background: <img src="/1.png" className="border rounded-md absolute md:-right-36 md:-top-20 md:transition-all md:duration-300 md:ease-out md:scale-[0.6] md:group-hover:scale-100" alt="Large Language Model" />

	},
	{
		name: "Data and 3D Visualization",
		description: "Comprehensive 3D visualization project.",
		href: "/project/data-visualization",
	},
	{
		name: "Hybrid Mobile App",
		description: "QQ Music / We Sing Living Room.",
		href: "/project/tme",
	},
];

const OpenSourceProjects = [
	{
		name: "Comments",
		description: "Add comments to your website.",
		href: "/project/comments",
	},
	{
		name: "daviddong.me",
		description: "Personal website template.",
		href: "/",
	},
];

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

			{/* Works */}
			<section>
				<h3>Works</h3>
				<BentoGrid className="lg:grid-rows-3">
					{Works.map((feature) => (
						<BentoCard key={feature.name} {...feature} />
					))}
				</BentoGrid>
			</section>
			{/* Open Source Project */}
			<section>
				<h3>Open Source Projects</h3>
				<BentoGrid className="lg:grid-rows-3">
					{OpenSourceProjects.map((feature) => (
						<BentoCard key={feature.name} {...feature} />
					))}
				</BentoGrid>
			</section>
		</article>
	);
}
