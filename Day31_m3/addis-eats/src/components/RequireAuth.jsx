import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to /login but preserve the current location in state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
