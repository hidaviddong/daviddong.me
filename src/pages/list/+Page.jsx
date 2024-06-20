import React from "react";
import SongList from "./components/SongList";
export default function Page() {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="flex flex-col h-full justify-center items-center gap-12 mt-4">
				<div className="flex flex-col justify-center items-center gap-2">
					<div className="rounded-md w-72 h-72 drop-shadow-md border bg-gradient-to-br from-[#ebebeb] via-[#efdfe0] to-[#0a4f9e]  p-4">
						<span className="text-4xl font-semibold text-black/90">David Dong's Playlist</span>
					</div>
					<div className="text-2xl font-semibold text-black/90">David Dong's Playlist</div>
					<h2 className="text-[#d60017] text-xl font-normal">David Dong</h2>
					<div className="text-[13px] text-black/50">R&B Neo Soul Gospel</div>
				</div>
				<SongList />
			</div>
		</div>
	);
}
