import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    // Fetch top rated movies and set in the store
    const dispatch = useDispatch();

    useEffect(()=>{
        getTopRatedMovies();
    },[]);

    const getTopRatedMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const data = await response?.json();
        dispatch(addTopRatedMovies(data?.results));
    }
}

export default useTopRatedMovies;