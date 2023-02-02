import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ad from "./Components/Ad";
import Ads from "./Components/Ads";
import Login from "./Components/auth/login";
import DefaultLayout from "./Components/containers/default";
import CreateAd from "./Components/CreatingAd";
import Home from "./Components/home";
import Profile from "./Components/ProfilePage";
import SavedAd from "./Components/SavedAd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="savedAd" element={<SavedAd />} />
        <Route path="createAd" element={<CreateAd />} />
        <Route path="ads" element={<Ads />} />
        <Route path="ad" element={<Ad />} />
      </Route>
    </Routes>
  );
}

export default App;
