import { Link, Route, Switch } from "wouter";
import About from "./About";
import Blog from "./Blog";
import Project from "./Project";

export default function App() {
	return (
		<div className="w-full h-screen">
			<div className="w-full justify-center flex items-center">
				<Link className="rounded-md bg-slate-300 p-2 text-slate-700" href="/">
					About
				</Link>
				<Link className="rounded-md bg-slate-300 p-2 text-slate-700" href="/project">
					Project
				</Link>
				<Link className="rounded-md bg-slate-300 p-2 text-slate-700" href="/blog">
					Blog
				</Link>
			</div>

			<Switch>
				<Route path="/" component={About} />
				<Route path="/project" component={Project} />
				<Route path="/blog" component={Blog} />
				<Route path="/blog/:name">{(params) => <>Hello, {params.name}!</>}</Route>
				<Route>404: No such page!</Route>
			</Switch>
		</div>
	);
}
