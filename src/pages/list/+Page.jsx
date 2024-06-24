import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MovieCover, MovieList } from "./components/movie";
import { SongCover, SongList } from "./components/music";
import { VideoCover, VideoList } from "./components/video";

export default function Page() {
	return (
		<Tabs defaultValue="Music" className="h-full w-96 mt-12 p-4">
			<TabsList className="grid w-full grid-cols-3 mb-4 ">
				<TabsTrigger value="Music">Music</TabsTrigger>
				<TabsTrigger value="Movies">Movies</TabsTrigger>
				<TabsTrigger value="Videos">Videos</TabsTrigger>
			</TabsList>

			<TabsContent value="Music" className="flex flex-col h-full justify-center items-center">
				<SongCover />
				<SongList />
			</TabsContent>

			<TabsContent value="Movies" className="flex flex-col h-full justify-center items-center">
				<MovieCover />
				<MovieList />
			</TabsContent>

			<TabsContent value="Videos" className="flex flex-col h-full justify-center items-center">
				<VideoCover />
				<VideoList />
			</TabsContent>
		</Tabs>
	);
}
