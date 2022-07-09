import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./Context/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import LogIn from "./Component/LogIn/LogIn";
import NavBar from "./Component/Navbar/NavBar";
import SignUp from "./Component/SignUp/SignUp";
import { AuthProviderContext } from "./Context/AuthProviderContext";
import Delivery from "./Component/Delivery/Delivery";
import Cart from "./Component/Cart/Cart";
import Home from "./Component/Home/Home/Home";
import NotFound from "./Component/NotFound";
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
  const [user, setUser] = useState({});
  // Fetching the data of current User form firebase auth
  useEffect(() => {
    const currentUserData = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
      );
    return () => currentUserData();
  });

  return (
    <ShopContextProvider>
    <AuthProviderContext>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<Home />} />
        <Route path="/lunch" element={<Home />} />
        <Route path="/dinner" element={<Home />} />
        <Route
          path="/delivery"
          element={user ? <Delivery /> : <Navigate replace to="/logIn" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart user={user} /> : <Navigate replace to="/logIn" />}
        />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
        </AuthProviderContext>
    </ShopContextProvider>
  );
}

export default App;
