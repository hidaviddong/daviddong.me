import ChatPageDialog from "./assets/chat-page-dialog.png";
import ChatPageImage from "./assets/chat-page-img.png";
import ChatPageMain from "./assets/chat-page-main.png";
import LiteratureSearch from "./assets/literature-search.png";
import Plugin from "./assets/plugin.png";
export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">AI Diagnosis Assistant</p>
				<p className="my-0">2023 · Front-End Developer · Peking University Institute</p>
			</div>
			<p>Developed a chat application in medical field.</p>
			<div className="flex flex-col space-y-12">
				<div className="flex flex-col justify-center items-center">
					<div className="space-y-4">
						<img
							onLoad={() => { console.log('i am loaded') }}
							src={ChatPageMain}
							alt="chat-page-main"
							className="bg-gray-50 border rounded-md my-0"
							width={1912}
							height={958}
						/>
						<img
							src={ChatPageDialog}
							alt="chat-page-dialog"
							className="bg-gray-50 border rounded-md my-0"
							width={1512}
							height={416}
						/>
					</div>

					<p className="my-0 mt-4 text-sm font-medium">Chat Page</p>
					<p className="my-0 text-neutral-400 text-sm">
						You can view previous conversations or start a new one.
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={Plugin} alt="plugin" className="bg-gray-50 border rounded-md my-0" />
					<p className="my-0 mt-4 text-sm font-medium">Plugin System</p>
					<p className="my-0 text-neutral-400 text-sm">Different roles have different plugins.</p>
				</div>

				<div className="flex flex-col justify-center items-center">
					<img
						src={ChatPageImage}
						alt="chat-page-image"
						className="bg-gray-50 border rounded-md my-0"
						width={1551}
						height={304}
					/>
					<p className="my-0 mt-4 text-sm font-medium">Multimodal</p>
					<p className="my-0 text-neutral-400 text-sm">Model can understand images.</p>
				</div>

				<div className="flex flex-col justify-center items-center">
					<img
						src={LiteratureSearch}
						alt="literature-search"
						className="bg-gray-50 border rounded-md my-0"
						width={1912}
						height={958}
					/>
					<p className="my-0 mt-4 text-sm font-medium">Literature Search</p>
					<p className="my-0 text-neutral-400 text-sm">Cite literature in conversations.</p>
				</div>
			</div>
		</div>
	);
}
