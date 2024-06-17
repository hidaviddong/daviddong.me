import { Dock, DockIcon } from "@/components/ui/dock";
import {
	EmailIcon,
	GithubIcon,
	LinkedInIcon,
	ResumeIcon,
	WhatsAppIcon,
} from "@/components/ui/icons";
import { navigate } from "vike/client/router";
export default function LayoutDefault({ children }) {
	return (
		<div className="w-full h-screen selection:text-blue-500 selection:bg-blue-100 bg-dot-black/[0.2] flex flex-col items-center">
			<main className="flex justify-center items-center flex-col">{children}</main>
			<Dock className="fixed bottom-2 bg-white">
				<DockIcon
					onClick={() => {
						window.location.href = "https://github.com/DongHY1";
					}}
				>
					<GithubIcon className="h-6 w-6" />
				</DockIcon>
				<DockIcon
					onClick={() => {
						window.location.href = "https://www.linkedin.com/in/DongHY1";
					}}
				>
					<LinkedInIcon className="h-6 w-6" />
				</DockIcon>
				<DockIcon
					onClick={() => {
						window.location.href = "mailto:hi@daviddong.me";
					}}
				>
					<EmailIcon className="h-6 w-6" />
				</DockIcon>
				<DockIcon
					onClick={() => {
						window.location.href = "https://wa.link/bbs3i9";
					}}
				>
					<WhatsAppIcon className="h-6 w-6" />
				</DockIcon>
				<DockIcon
					onClick={() => {
						window.location.href = "https://typst.app/project/rIWFtNvpmsgHgh18iqpk2a";
					}}
				>
					<ResumeIcon className="h-6 w-6" />
				</DockIcon>
			</Dock>
		</div>
	);
}
