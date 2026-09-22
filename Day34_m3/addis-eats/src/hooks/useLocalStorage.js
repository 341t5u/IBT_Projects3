//Instead of writing useState and useEffect with localStorage manually in every component,
// this hook creates a state variable that automatically syncs with localStorage.
import { useState, useEffect } from "react";
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localstorage key="${key}":`, error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error Setting localstorage key="${key}":`, error);
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}
