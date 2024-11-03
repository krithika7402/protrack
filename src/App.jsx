// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PageLoader from "./components/PageLoader/PageLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 2250);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={`app-container ${showContent ? 'fade-in' : ''}`}>
      <Header />
      <div className="app-content">
        <Sidebar />
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;