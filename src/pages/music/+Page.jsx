import { MusicCover, MusicList } from "./components";
export default function Page() {
	return (
		<div className="flex flex-col w-full h-full justify-center items-center gap-4 mt-4">
			<MusicCover />
			<MusicList />
		</div>

	);
}
