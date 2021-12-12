import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Personal from "./pages/Personal/Personal";
const Home = lazy(() => import("./pages/Home/Home"));
// const Auth = lazy(() => import("./pages/Auth/Auth"));
// const Personal = lazy(() => import("./pages/Personal/Personal"));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Suspense>
  );
}

export default App;
