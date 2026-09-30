"use client";
import { useEffect } from "react";
export default function MenuError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  <div style={{ padding: "20px", color: "red" }}>
    <h2>Something went wrong loading the menu!</h2>
    <button onClick={() => reset()}>Try again</button>
  </div>;
}
