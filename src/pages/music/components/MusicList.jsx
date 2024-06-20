import { Music } from '@/config/project';
import { MusicPlayIcon } from "@/components/ui/icons";

function MusicItem({ imageUrl, url, name, author }) {
    const backgroundImageUrl = `/music/${imageUrl}.jpg`
    return (
        <div className="group flex justify-center items-center hover:bg-zinc-100 hover:rounded-md p-2">
            <div
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                className="relative rounded-md drop-shadow-sm border min-w-56 h-36 bg-cover bg-center flex justify-center items-center">

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-md"></div>
                <MusicPlayIcon
                    className="w-10 h-10 hidden group-hover:block z-10 cursor-pointer"
                    onClick={() => {
                        window.location.href = url
                    }}
                />

            </div>
            <div className="flex flex-col justify-center ml-2 w-full">
                <div className="text-black/80 text-md font-normal">{name}</div>
                <div className="text-black/50 text-sm font-normal">{author}</div>
            </div>
        </div>
    )
}

export default function MusicList() {
    return (
        <div className="flex flex-col p-1 space-y-2">
            {Music.map((song) => (
                <MusicItem key={song.name} imageUrl={song.imageUrl} url={song.url} name={song.name} author={song.author} />
            ))}
        </div>
    );
}
