import "./App.css";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import hourGlass from "./images/Hourglass.gif";
import Auth from "./pages/Auth/Auth";
import Personal from "./pages/Personal/Personal";
import Search from "./pages/Search/Search";
import Chat from "./pages/Chat/Chat";
const Home = lazy(() => import("./pages/Home/Home"));
// const Auth = lazy(() => import("./pages/Auth/Auth"));
// const Personal = lazy(() => import("./pages/Personal/Personal"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading-screen">
          <img src={hourGlass} style={{width: "30px"}}/>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/personal/:idUser" element={<Personal />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chat/:idChat" element={<Chat />} />
      </Routes>
    </Suspense>
  );
}

export default App;
