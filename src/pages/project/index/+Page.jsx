import { Button } from "@/components/ui/button";
import { SideProjects, Works } from "@/config/project";

const ProjectLists = ({ title, items }) => (
	<section>
		<h3>{title}</h3>
		<ul>
			{items.map(({ name, href }) => (
				<li key={name}>
					<Button
						variant="link"
						className="text-md text-neutral-500 hover:text-neutral-800"
						onClick={() => {
							window.location.href = href
						}}
					>
						{name}
					</Button>
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
