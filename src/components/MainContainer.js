import {useSelector} from 'react-redux';

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const MainContainer = () =>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const movies = useSelector(store=>store?.movie?.nowPlayingMovies);
    
    if(!movies) return;

    const {original_title, overview,id} = movies[0];

    return(
        <div>
            <div>
                <VideoTitle movieTitle={original_title} movieOverview={overview}/>
                <VideoBackground movieId={id}/>
            </div>
            <SecondaryContainer/>
        </div>
    )
}

export default MainContainer;