import { Dock, DockIcon } from "@/components/ui/dock";
import {
	EmailIcon,
	GithubIcon,
	LinkedInIcon,
	ResumeIcon,
	WhatsAppIcon,
} from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { SideProjects, Works } from "@/config/project";
const ProjectLists = ({ title, items }) => (
	<>
		<h2>{title}</h2>
		<section className="w-full">
			{items.map((feature) => (
				<a href={feature.href} key={feature.name} className="no-underline block hover:bg-zinc-100 ease-in-out duration-300 hover:rounded-md p-4 hover:cursor-pointer">
					<div className="text-neutral-500">{feature.name}</div>
					<div className="text-zinc-400 text-sm">{feature.time} · {feature.description}</div>
				</a>
			))}
		</section>
	</>
);

export default function Page() {
	return (
		<article className="prose prose-p:text-neutral-500 p-12">
			<h1>Hi, I'm Haoyu</h1>
			{/* about me */}
			<section className="p-4">
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
					In my free time, I usually play guitar and watch movies. Here is a list of my favorites
					<a className="no-underline px-2 mx-1 text-sm hover:cursor-pointer" data-umami-event="List Button" href="/list" >
						📃
					</a>
					.
				</div>
				<p>
					I recently moved to Hong Kong and am actively seeking a software development position.
					Feel free to reach out to me!
				</p>
				<p>
					Email me at &nbsp;
					<span className="font-mono text-neutral-800 hover:underline hover:underline-offset-2">
						hi@daviddong.me
					</span>
					.
				</p>
			</section>
			<ProjectLists title="Works" items={Works} />
			<ProjectLists title="Side Projects" items={SideProjects} />

			<div className="w-full justify-center flex">
				<Dock className="fixed bottom-4 bg-white">
					<DockIcon
						data-umami-event="Github Button"
						href="https://github.com/DongHY1"
					>
						<GithubIcon className="h-6 w-6" />
					</DockIcon>
					<DockIcon
						data-umami-event="Linekdin Button"
						href="https://www.linkedin.com/in/DongHY1"
					>
						<LinkedInIcon className="h-6 w-6" />
					</DockIcon>

					<DockIcon
						data-umami-event="Email Button"
						href="mailto:hi@daviddong.me"
					>
						<EmailIcon className="h-6 w-6" />
					</DockIcon>
					<DockIcon
						data-umami-event="WhatsApp Button"
						href="https://wa.link/bbs3i"
					>
						<WhatsAppIcon className="h-6 w-6" />
					</DockIcon>
					<DockIcon
						data-umami-event="Resume Button"
						href="/cv.pdf"
					>
						<ResumeIcon className="h-6 w-6" />
					</DockIcon>
				</Dock>
			</div>
		</article>
	);
}

