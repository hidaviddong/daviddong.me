export default function LayoutDefault({ children }) {
	const year = new Date().getFullYear();
	return (
		<div className="w-full h-full bg-dot-black/[0.2] selection:text-blue-500 selection:bg-blue-100 flex flex-col items-center">
			<main className="h-full w-full flex justify-center items-center flex-col">{children}</main>
			<footer className="w-full text-center text-sm text-neutral-400">
				<p>© {year} David Dong. All rights reserved.</p>
			</footer>
		</div>
	);
}
