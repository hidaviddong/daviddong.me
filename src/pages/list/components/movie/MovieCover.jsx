export default function MovieCover() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
            <div className="rounded-md w-72 h-72 drop-shadow-md border bg-gradient-to-br from-gray-100 via-pink-50 to-emerald-700 p-4">
                <span className="text-4xl font-semibold text-black/90">David Dong's MovieList</span>
            </div>
            <div className="text-2xl font-semibold text-black/90">David Dong's MovieList</div>
            <h2 className="text-[#d60017] text-xl font-normal">David Dong</h2>
            <div className="text-[13px] text-black/50">Thriller, Tragicomedy</div>
        </div>
    )
}
