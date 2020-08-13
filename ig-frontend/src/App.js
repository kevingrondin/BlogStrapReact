import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import SinglePostPage from "./pages/SinglePostPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <HashRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/:id" element={<SinglePostPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
