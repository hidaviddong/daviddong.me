import { useState } from "react";
import "./index.css";
import { motion } from "framer-motion"
export default function LayoutDefault({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="w-full h-screen selection:text-blue-500 selection:bg-blue-100">
			<header className="w-full flex justify-center items-center">
				{/* <a href="/">About</a>
				<a href="/blog">Blog</a>
				<a href="/project">Project</a> */}

				<motion.div
					layout
					data-isopen={isOpen}
					initial={{ borderRadius: 50 }}
					transition={{ duration: 0.3 }}
					className="data-[isopen=true]:w-48 w-24 h-12 flex justify-center items-center bg-black shadow-lg mt-4"
					onHoverStart={() => setIsOpen(true)}
					onHoverEnd={() => setIsOpen(false)}
				>
					<motion.div layout className="text-white"  >
						<a href="/blog">Blog</a>
					</motion.div>
				</motion.div>
			</header>
			<main>{children}</main>
		</div>
	);
}
