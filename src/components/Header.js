import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUser } from "../utils/userSlice";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
      <img
        src={LOGO_URL}
        alt="logo"
        className="w-40"
      />
      {user && (
        <div className="p-4 flex">
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
