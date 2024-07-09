import './index.css'
import { usePageContext } from 'vike-react/usePageContext'
export { Layout }
function Layout({ children }) {
	const year = new Date().getFullYear();
	const pageContext = usePageContext()
	const shouldShowCD = pageContext.urlOriginal !== '/'
	return (
		<div className="w-full  selection:text-blue-500 selection:bg-blue-100 flex flex-col items-center">
			<main className="h-full w-full flex justify-center items-center flex-col">{children}</main>
			<footer className="w-full text-center text-sm space-y-4 text-zinc-700 relative bottom-0">
				{shouldShowCD && <a href="/" className="font-mono underline underline-offset-1">cd /</a>}
				<p>© {year} David Dong. All rights reserved.
					<a href="https://cloud.umami.is/share/057q09EfzZ3Dm6sQ/daviddong.me">
						📈
					</a>
				</p>
			</footer>
		</div>
	);
}
