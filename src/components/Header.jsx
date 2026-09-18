import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import CartBadge from "./CartBadge";

export default function Header() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  // Local state to capture user inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    // Pass the typed user details into the AuthContext
    login({ name: username, password: password });

    // Clear input fields
    setUsername("");
    setPassword("");
  };

  return (
    <header className={`header ${theme}`}>
      <h1>Addis Eats</h1>
      <div className="nav-controls">
        <button onClick={toggleTheme}>Theme: {theme}</button>

        {user ? (
          <div>
            <span>Welcome, {user.name}! </span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "inline-flex", gap: "0.5rem" }}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
          </form>
        )}

        <CartBadge />
      </div>
    </header>
  );
}
