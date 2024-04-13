import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () =>{
    // it should update the popular movies list to store
    const dispatch = useDispatch();

    useEffect(()=>{
        getPopularMovies();
    },[]);

    const getPopularMovies = async () =>{
       const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
       const data = await response.json();

       dispatch(addPopularMovies(data?.results));
    }
}

export default usePopularMovies;