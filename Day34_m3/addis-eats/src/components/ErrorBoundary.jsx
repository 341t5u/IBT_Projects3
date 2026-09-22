import React from "react";
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "Addis Eats ErrorBoundary caught an error:",
      error,
      errorInfo,
    );
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "3rem", textAlign: "center", color: "#1e293b" }}>
          <h1 style={{ color: "#ef4444" }}>Something went wrong! 🍲</h1>
          <p style={{ margin: "1rem 0" }}>
            An unexpected error occurred while rendering this page.
          </p>
          <button
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
              border: "none",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => window.location.assign("/")}
          >
            Reload Home Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
