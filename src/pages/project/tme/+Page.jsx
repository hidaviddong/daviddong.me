export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="font-medium text-base flex flex-col gap-1">
				<p className="my-0">Hybrid Mobile App</p>
				<p className="my-0">2022 · Intern Software Developer · Tencent Music</p>
			</div>
			<p>Hybrid app development for QQ Music and WeSing.</p>
			<div className="flex flex-col space-y-12">
				<div className="flex flex-col justify-center items-center">
					<img
						src="/images/game.gif"
						alt="game"
						className="bg-gray-50 border rounded-md my-0"
						width={774}
						height={804}
					/>
					<p className="my-0 mt-4 text-sm font-medium">Mini game</p>
					<p className="my-0 text-neutral-400 text-sm">Mini-games in the live streaming room.</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						src="/images/rank.gif"
						alt="rank"
						className="bg-gray-50 border rounded-md my-0"
						width={802}
						height={812}
					/>
					<p className="my-0 mt-4 text-sm font-medium">Rank List</p>
					<p className="my-0 text-neutral-400 text-sm">
						View the ranking of users in the live streaming room.
					</p>
				</div>
			</div>
		</div>
	);
}
