import AboutMe from "./components/About/AboutMe";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { AppProvider } from "./context/AppProvider";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Projects from "./components/Projects/Projects";
import Skills from "./components/About/Skills";
import ContactMe from "./components/Contact/ContactMe";

function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AppProvider>
          <NavBar />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </AppProvider>
      )}
    </>
  );
}

export default App;
