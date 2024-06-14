import { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";
import Link from "../components/Link";
export default function LayoutDefault({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="w-full h-screen selection:text-blue-500 selection:bg-blue-100 bg-gradient-to-b from-zinc-100 to-zinc-50 flex flex-col items-center">
			<main className="h-full flex justify-center items-center flex-col">{children}</main>
			<motion.div
				layout
				data-isopen={isOpen}
				initial={{ borderRadius: 50 }}
				transition={{ duration: 0.3 }}
				className="fixed bottom-4 data-[isopen=true]:h-48 backdrop-blur-sm w-96 h-12 flex flex-col justify-center items-center  bg-white/30 shadow-lg"
				onHoverStart={() => setIsOpen(true)}
				onHoverEnd={() => setIsOpen(false)}
				onClick={() => setIsOpen(!open)}
			>
				<motion.div
					layout
					className="text-black font-sans font-medium m-1 w-full flex justify-center items-center gap-x-4"
				>
					<Link href="/">About</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/project">Project</Link>
				</motion.div>
			</motion.div>
		</div>
	);
}
