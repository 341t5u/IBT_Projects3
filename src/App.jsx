import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu";
import Cart from "./components/Cart";
import CheckForm from "./components/CheckForm";

function Home() {
  return (
    <>
      <Menu />
      <Cart />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/checkout" element={<CheckForm />} />
    </Routes>
  );
}

export default App;
