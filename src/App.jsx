// src/App.jsx
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

export default function App() {
  const { theme } = useTheme();

  return (
    // Apply the current theme ("light" or "dark") to the outer container
    <div className={`app ${theme}`}>
      <Header />
      <main style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
        <Menu />
        <Cart />
      </main>
    </div>
  );
}
