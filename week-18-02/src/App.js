import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <div className="h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
