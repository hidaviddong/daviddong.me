import "./index.css";
export default function LayoutDefault({ children }) {
	return (
		<div className="w-full h-screen">
			<header className="w-full flex justify-center items-center">
				<a href="/">About</a>
				<a href="/blog">Blog</a>
				<a href="/project">Project</a>
			</header>
			<main>{children}</main>
		</div>
	);
}
