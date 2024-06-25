import './index.css'
export default function LayoutDefault({ children }) {
	const year = new Date().getFullYear();
	return (
		<div className="w-full  selection:text-blue-500 selection:bg-blue-100 flex flex-col items-center">
			<main className="h-full w-full flex justify-center items-center flex-col">{children}</main>
			<footer className="w-full text-center text-sm text-neutral-700 relative bottom-0">
				<p>© {year} David Dong. All rights reserved.</p>
			</footer>
		</div>
	);
}
