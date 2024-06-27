import { SideProjects, Works } from "@/config/project";


const ProjectLists = ({ title, items }) => (
	<section>
		<h3>{title}</h3>
		<ul>
			{items.map(({ name, href }) => (
				<li key={name}>
					<a
						variant="link"
						className="no-underline text-md text-zinc-500 hover:text-zinc-800 text-primary underline-offset-4 hover:underline"
						href={href}
					>
						{name}
					</a>
				</li>
			))}
		</ul>
	</section>
);

export default function Page() {
	return (
		<>
			<ProjectLists title="Works" items={Works} />
			<ProjectLists title="Side Projects" items={SideProjects} />
		</>
	);
}
