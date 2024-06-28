
import { prefetch } from 'vike/client/router'
import { SideProjects, Works } from "@/config/project";
const ProjectLists = ({ title, projects }) => (
	<>
		<h2>{title}</h2>
		<section className="w-full">
			{projects.map((project) => (
				<a onMouseOver={() => prefetch(project.href)} onFocus={() => prefetch(project.href)} aria-label={project.description} href={project.href} key={project.name} className="no-underline block hover:bg-zinc-100 ease-in-out duration-300 hover:rounded-md p-4 hover:cursor-pointer">
					<div className="text-zinc-700">{project.name}</div>
					<div className="text-zinc-500 text-sm">{project.time} · {project.description}</div>
				</a>
			))}
		</section>
	</>
);

export default function Page() {
	return (
		<article className="prose p-12">
			<h1>Hi, I'm Haoyu</h1>
			<nav className='flex space-x-4'>
				<a
					data-umami-event="GitHub Button"
					href="https://github.com/DongHY1"
					className="text-zinc-500 decoration-zinc-300 underline-offset-2 hover:decoration-zinc-400"
				>
					GitHub
				</a>
				<a
					data-umami-event="Linkedin Button"
					href="https://www.linkedin.com/in/DongHY1"
					className="text-zinc-500 decoration-zinc-300 underline-offset-2 hover:decoration-zinc-400"
				>
					LinkedIn
				</a>
				<a
					data-umami-event="Email Button"
					href="mailto:hi@daviddong.me"
					className="text-zinc-500 decoration-zinc-300 underline-offset-2 hover:decoration-zinc-400"
				>
					Email
				</a>
				<a
					data-umami-event="WhatsApp Button"
					href="https://wa.link/bbs3i"
					className="text-zinc-500 decoration-zinc-300 underline-offset-2 hover:decoration-zinc-400"
				>
					WhatsApp
				</a>
				<a
					data-umami-event="Resume Button"
					href="/cv.pdf"
					className="text-zinc-500 decoration-zinc-300 underline-offset-2 hover:decoration-zinc-400"
				>
					Resume
				</a>
			</nav>
			<section>

				<p>
					<span>You can call me David. I'm a software engineer and previously worked at</span>
					<a aria-label="Tencent Music" href="https://www.tencentmusic.com/en-us/" className="text-zinc-500 mx-1 decoration-zinc-300 underline-offset-2  hover:decoration-zinc-400">Tencent Music</a>
					<span>and</span>
					<a aria-label="Peking University Institute" href="https://icode.pku.edu.cn/" className="text-zinc-500 mx-1 decoration-zinc-300 underline-offset-2  hover:decoration-zinc-400">Peking University Institute</a>
					<span>.</span>
				</p>

				<p>
					<span>In my free time, I usually play guitar and watch movies. Here is a</span>
					<a aria-label="David Dong's project list" onMouseOver={() => prefetch("/list")} onFocus={() => prefetch("/list")} href="/list" className="text-zinc-500 mx-1 decoration-zinc-300 underline-offset-2 decoration-wavy   hover:decoration-zinc-400">list</a>
					<span>.</span>
				</p>

				<p>
					I recently moved to Hong Kong and am actively seeking a software development position.
					Feel free to reach out to me !
				</p>

				<p>
					<span>Email me at</span>
					<a aria-label="hi@daviddong.me" href="mailto:hi@daviddong.me" className="text-zinc-500 mx-1 decoration-zinc-300 underline-offset-2  hover:decoration-zinc-400">hi@daviddong.me</a>
					<span>.</span>
				</p>
			</section>
			<ProjectLists title="Works" projects={Works} />
			<ProjectLists title="Side Projects" projects={SideProjects} />
		</article>
	);
}

