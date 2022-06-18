import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <>
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
