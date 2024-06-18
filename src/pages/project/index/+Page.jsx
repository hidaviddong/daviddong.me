import { Button } from "@/components/ui/button";
import { OpenSourceProjects, Works } from "@/config/project";
import React from "react";
import { navigate } from "vike/client/router";

const ProjectLists = ({ title, items }) => (
	<section>
		<h3>{title}</h3>
		<ul>
			{items.map(({ name, href }) => (
				<li key={name}>
					<Button
						variant="link"
						className="text-md text-neutral-500 hover:text-neutral-800"
						onClick={() => navigate(href)}
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
		<main className="prose prose-p:text-neutral-500 p-12 h-screen">
			<ProjectLists title="Works" items={Works} />
			<ProjectLists title="Open Source Projects" items={OpenSourceProjects} />
		</main>
	);
}
