import React, { createContext, useContext, useState, useEffect } from "react";

// ThemeContext: შეინახავს "light" ან "dark"
const ThemeContext = createContext();

// Custom hook — მარტივად გამოსაყენებლად
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider: უზრუნველყოფს Context-ს და body background-ის შეცვლას
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("app-theme");
      return saved === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  });

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  useEffect(() => {
    const root = document.body;
    if (theme === "dark") {
      root.style.backgroundColor = "#0f172a";
      root.style.color = "#f8fafc";
    } else {
      root.style.backgroundColor = "#f8fafc";
      root.style.color = "#0f172a";
    }

    try {
      localStorage.setItem("app-theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// მაგალითი — App კომპონენტი
export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

function Main() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">თემა: {theme === "light" ? "Light" : "Dark"}</h1>
        <p className="mb-6">დააჭირე ღილაკს თემის შეცვლისთვის — body-ის background ფერიც შეიცვლება.</p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg border font-medium hover:opacity-90 transition"
        >
          თემის შეცვლა
        </button>
      </div>
    </div>
  );
}