import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () =>{
    // fetch upcoming movies list and update in the store
    const dispatch = useDispatch();

    useEffect(()=>{
        getUpcomingMovies();
    },[]);

    const getUpcomingMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addUpcomingMovies(data?.results));
    }
}

export default useUpcomingMovies;