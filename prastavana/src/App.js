import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import "./index.css";
import bars from "../src/assets/Group 1.svg";
import Register from "./components/Register";
import Login from "./components/Login";
import MyLinks from "./screens/MyLinks";
import AuthState from "./context/auth/AuthState";
import LinkForm from "./screens/LinkForm";
import LinkformState from "./context/linkform/linkformState";
function App() {
  return (
    <>
      <AuthState>
        <LinkformState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/mylinks" element={<MyLinks />} />
              <Route exact path="/LinkForm" element={<LinkForm />} />
            </Routes>
            <footer>
              <img src={bars} alt={"bars"} style={{ width: "100%" }}></img>
            </footer>
          </Router>
        </LinkformState>
      </AuthState>
    </>
  );
}

export default App;
