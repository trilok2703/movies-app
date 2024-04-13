import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    movies && (
      <div className="bg-black pl-10">
        <div className="-mt-64 relative z-10">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
            <MovieList title={"Toprated Movies"} movies={movies?.topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
