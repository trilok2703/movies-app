import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";

import Header from "./Header";
import { updateUser } from "../utils/userSlice";
import {BG_URL} from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = (e) => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    // Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Then proceed with sign in/sign up
    if (!isSignIn) {
      // Sign Up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { email, uid, displayName } = auth.currentUser;
              dispatch(
                updateUser({ email: email, uid: uid, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
      <form
        className="absolute w-3/12 p-12 mx-auto my-40 left-0 right-0 bg-black text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="font-bold text-3xl my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2  w-full rounded-sm bg-gray-600"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2  w-full rounded-sm bg-gray-600"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2  w-full rounded-sm bg-gray-600"
          ref={password}
        />
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <button onClick={toggleSignIn}>New to Netflix? Sign up now.</button>
      </form>
    </div>
  );
};

export default Login;
