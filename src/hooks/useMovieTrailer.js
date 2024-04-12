import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) =>{
    const dispatch= useDispatch();

    // Fetching Trailer Video
    useEffect(()=>{
        getMovieVideos();
    },[]);

    const getMovieVideos = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const data = await response.json();

        const filterData = data?.results?.filter(vid=>vid.type==="Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];

        console.log(trailer);
        dispatch(addVideoTrailer(trailer))
    }
}

export default useMovieTrailer;