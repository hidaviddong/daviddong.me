import { Image } from "@/components/ui/image";
import { useData } from "vike-react/useData";
export default function Page() {
	const { project } = useData()
	return (
		<div className="flex flex-col">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">{project.name}</p>
				<p className="my-0 text-zinc-400 text-sm">{project.time} · {project.description}</p>
			</div>
			<p>Hybrid app development for QQ Music and WeSing.</p>
			<div className="flex flex-col space-y-12">
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/game.gif"
						alt="game"
						className="bg-gray-50 border rounded-md my-0"
					/>
					<p className="my-0 mt-4 text-sm font-medium">Mini game</p>
					<p className="my-0 text-zinc-400 text-sm">Mini-games in the live streaming room.</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/images/rank.gif"
						alt="rank"
						className="bg-gray-50 border rounded-md my-0"
					/>
					<p className="my-0 mt-4 text-sm font-medium">Rank List</p>
					<p className="my-0 text-zinc-400 text-sm">
						View the ranking of users in the live streaming room.
					</p>
				</div>
			</div>
		</div>

	);
}
