import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = (e) => {
        e.preventDefault();
        setIsSignIn(!isSignIn);
    }

    return (
      <div>
        <Header />
        <div className="absolute">
          <img
            alt="background"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          />
        </div>
        <form className="absolute w-3/12 p-12 mx-auto my-40 left-0 right-0 bg-black text-white rounded-lg bg-opacity-80">
            <h2 className="font-bold text-3xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
            {!isSignIn && <input type="text" placeholder="Full Name" className="p-2 my-2  w-full rounded-sm bg-gray-600" />}
            <input type="text" placeholder="Email Address" className="p-2 my-2  w-full rounded-sm bg-gray-600" />
            <input type="password" placeholder="Password" className="p-2 my-2  w-full rounded-sm bg-gray-600" />
            <button className="p-2 my-4 bg-red-700 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <button onClick={toggleSignIn}>New to Netflix? Sign up now.</button>
        </form>
      </div>
    );
};

export default Login;