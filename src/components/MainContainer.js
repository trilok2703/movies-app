import {useSelector} from 'react-redux';

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const MainContainer = () =>{
    useNowPlayingMovies();
    const movies = useSelector(store=>store?.movie?.nowPlayingMovies);
    
    if(!movies) return;
    console.log(movies[0]);

    const {original_title, overview,id} = movies[0];

    return(
        <div>
            <VideoTitle movieTitle={original_title} movieOverview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;