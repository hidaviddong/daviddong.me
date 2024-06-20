import { MOVIE_BASEURL, Movies } from "@/config/project";

function MovieItem({ title, year, imageUrl }) {
    return (
        <div className="flex group p-4 w-full hover:bg-zinc-100 hover:rounded-md">
            <div
                style={{ backgroundImage: `url('${MOVIE_BASEURL}${imageUrl}.jpg')` }}
                className="rounded-md border drop-shadow-md flex justify-center items-center bg-cover bg-center h-44 w-32"></div>
            <div className="flex flex-col justify-start items-start ml-4 gap-2">
                <div className="text-black/80 font-normal">{title}</div>
                <div className="text-black/50 font-normal text-sm">{year}</div>
            </div>
        </div>
    );
}

export default function MovieList() {

    return (
        <div className="flex w-full p-1 justify-center items-center flex-col">
            {Movies.map((movie) => (
                <MovieItem key={movie.title} title={movie.title} year={movie.year} imageUrl={movie.imageUrl} />
            ))}
        </div>
    );
}
