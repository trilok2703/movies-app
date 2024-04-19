import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUser } from "../utils/userSlice";
import {LOGO_URL, SUPPORTED_LANGUAGES} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  // Signout functionality
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened
        console.log(error);
      });
  };

  // GPT
  const handleGPTClick = () =>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }

  // To check the Authenication of the user and it will be like Event listener
  // It will be called once the page loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(
          updateUser({ email: email, uid: uid, displayName: displayName })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      // unsubscribe when component un-mounts
      return ()=>{
        unsubscribe();
      }
    });
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO_URL} alt="logo" className="w-40" />
      {user && (
        <div className="p-4 flex">
          {showGptSearch && (
            <select
              className="mr-2 py-2 px-4 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white bg-purple-800 p-2 rounded-lg"
            onClick={handleGPTClick}
          >
           {!showGptSearch ? " GPT Search" : "Home Page"}
          </button>
          <p className="font-bold text-white p-2">Hey, {user.displayName}</p>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
