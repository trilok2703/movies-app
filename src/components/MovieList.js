import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) =>{
    
    return(
        <div>
            <h1 className="text-2xl text-white py-3 font-semibold">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex">
                    {movies?.map((movie)=><MovieCard key={movie?.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;