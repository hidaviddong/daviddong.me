import { MusicPlayIcon } from "@/components/ui/icons";
import { SONG_BASEURL, Songs } from "@/config";
function SongItem({ song }) {
	return (
		<div className="group w-full flex hover:bg-zinc-100 hover:rounded-md p-2">
			<a
				aria-label="David Dong's Music List"
				href="https://music.apple.com/tr/playlist/david-dongs-playlist/pl.u-leyl096uME0KMW6"
				style={{ backgroundImage: `url(${SONG_BASEURL}${song.url}.jpg)` }}
				className="relative w-10 h-10 rounded-md border flex justify-center items-center bg-cover bg-center"
			>
				<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-md"></div>
				<MusicPlayIcon
					className="w-7 h-7 hidden group-hover:block z-10 cursor-pointer"
				/>
			</a>
			<div className="flex flex-col justify-center ml-2">
				<div className="text-black/80 text-[13px] font-normal">{song.title}</div>
				<div className="text-black/50 text-[13px] font-normal">{song.artist}</div>
			</div>
		</div>
	);
}

export default function SongList() {
	return (
		<div className="flex flex-col w-full p-1 space-y-2">
			{Songs.map((song) => (
				<SongItem key={song.title} song={song} />
			))}
		</div>
	);
}
