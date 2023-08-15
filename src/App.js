import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import NavBar from "./components/navbar.js";
import Router from "./routes/routes.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState("something");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar user={user} />
        <Router user={user} />
        {user ? (
          <div>
            <img src={user.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {user.name}</p>

            <p>Email Address: {user.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
      </BrowserRouter>
    </div>
  );
}
export default App;
