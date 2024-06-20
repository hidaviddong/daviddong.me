import { MusicPlayIcon } from "@/components/ui/icons";
import React from "react";
const SONG_BASEURL = "https://img1.doubanio.com/lpic/";

function SongItem({ song }) {
	return (
		<div className="group w-full flex hover:bg-zinc-100 hover:rounded-md p-2">
			<div
				style={{ backgroundImage: `url(${SONG_BASEURL}${song.url}.jpg)` }}
				className="relative w-10 h-10 rounded-md border bg-slate-400 flex justify-center items-center bg-cover bg-center"
			>
				<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-md"></div>
				<MusicPlayIcon
					className="w-7 h-7 hidden group-hover:block z-10 cursor-pointer"
					onClick={() => {
						window.location.href =
							"https://music.apple.com/tr/playlist/david-dongs-playlist/pl.u-leyl096uME0KMW6";
					}}
				/>
			</div>
			<div className="flex flex-col justify-center ml-2">
				<div className="text-black/80 text-[13px] font-normal">{song.title}</div>
				<div className="text-black/50 text-[13px] font-normal">{song.artist}</div>
			</div>
		</div>
	);
}

function SongList() {
	const songs = [
		{ title: "Blue Moon", artist: "David Tao", url: "s4208287" },
		{ title: "Love Words", artist: "Dean Ting", url: "s33545377" },
		{ title: "After the Love Has Gone", artist: "Earth Wind & Fire", url: "s2558289" },
	];

	return (
		<div className="flex flex-col w-full p-1 space-y-2">
			{songs.map((song) => (
				<SongItem key={song.title} song={song} />
			))}
		</div>
	);
}

export default function Page() {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<div className="flex flex-col h-full justify-center items-center gap-12">
				<div className="flex flex-col justify-center items-center gap-2">
					<div className="rounded-md w-72 h-72 drop-shadow-md border bg-gradient-to-br from-[#ebebeb] via-[#efdfe0] to-[#0a4f9e]  p-4">
						<span className="text-4xl font-semibold text-black/90">David Dong's Playlist</span>
					</div>
					<div className="text-2xl font-semibold text-black/90">David Dong's Playlist</div>
					<h2 className="text-[#d60017] text-xl font-normal">David Dong</h2>
					<div className="uppercase text-xs font-semibold text-black/50">updated TODAY</div>
					<div className="uppercase text-[13px] text-black/50">R&B Neo Soul Gospel</div>
				</div>
				<SongList />
			</div>
			<h1>Movie List</h1>
		</div>
	);
}
