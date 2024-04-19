import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
   const showGptSearch =  useSelector(store => store.gpt.showGptSearch)

    return(
        <div>
            <Header/>
            {showGptSearch ? <GPTSearchPage/> : <MainContainer/>}
        </div>
    )
}

export default Browse;