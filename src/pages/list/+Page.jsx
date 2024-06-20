import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MovieCover, MovieList } from "./components/movie";
import { SongCover, SongList } from "./components/music";

export default function Page() {
	return (
		<Tabs defaultValue="Music" className="h-full w-96 mt-12">
			<TabsList className="grid w-full grid-cols-2 mb-4">
				<TabsTrigger value="Music">Music</TabsTrigger>
				<TabsTrigger value="Movies">Movies</TabsTrigger>
			</TabsList>

			<TabsContent value="Music" className="flex flex-col h-full justify-center items-center">
				<SongCover />
				<SongList />
			</TabsContent>

			<TabsContent value="Movies" className="flex flex-col h-full justify-center items-center">
				<MovieCover />
				<MovieList />
			</TabsContent>
		</Tabs>
	);
}
