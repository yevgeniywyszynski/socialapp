import React from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProfileMember from "../src/pages/ProfileMember/ProfileMember";

const users = [
  {
    userId: 10,
    name: "Tony Soprano",
    profilePic:
      "https://m.media-amazon.com/images/I/51fksPdErOL._AC_UF894,1000_QL80_.jpg",
    nickName: "tony_soprano",
    city: "USA, New York",
  },
  {
    userId: 1,
    name: "Megan Fox",
    profilePic:
      "https://phantom-marca.unidadeditorial.es/dbc032dc01af5e2bd4ea209e639ff917/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/28/16749081475728.jpg",
    nickName: "megan_fox",
    city: "USA, Los Angeles",
  },
  {
    userId: 2,
    name: "Andrzej Duda",
    profilePic:
      "https://pbs.twimg.com/profile_images/556495456805453826/wKEOCDN0_400x400.png",
    nickName: "duda_andrzej",
    city: "Poland, Warsaw",
  },
  {
    userId: 3,
    name: "Julia Roberts",
    profilePic:
      "https://prod-images.tcm.com/Master-Profile-Images/JuliaRoberts.162850.2.jpg",
    nickName: "julia_roberts",
    city: "USA, San Francisco",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/member/:id" element={<ProfileMember users={users} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
