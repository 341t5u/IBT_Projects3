import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If redirected from RequireAuth, get target path; default to "/"
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: "Abebe Bekele" });
    navigate(from, { replace: true });
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}
    >
      <h1>Sign In</h1>
      <p>Please sign in to complete your order.</p>
      <button
        onClick={handleLogin}
        style={{
          padding: "0.8rem 1.5rem",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Sign In
      </button>
    </div>
  );
}
