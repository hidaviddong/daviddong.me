import './index.css'
import React from 'react'
import { PageContextProvider } from './usePageContext'
export default function LayoutDefault({ pageContext, children }) {
	const year = new Date().getFullYear();
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<div className="w-full  selection:text-blue-500 selection:bg-blue-100 flex flex-col items-center">
					<main className="h-full w-full flex justify-center items-center flex-col">{children}</main>
					<footer className="w-full text-center text-sm text-neutral-700 relative bottom-0">
						<p>© {year} David Dong. All rights reserved.</p>
					</footer>
				</div>
			</PageContextProvider>
		</React.StrictMode>
	);
}
