import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import DateView from "./components/DateView";
import Taskview from "./components/Taskview";
import Expansionbutton from "./components/Expansionbutton";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";

function App() {
  const taskContainer = useRef();
  const expansionButton = useRef();
  const handleExpansionClick = () => {
    switch (expansionButton.current.innerHTML) {
      case "Show less":
        expansionButton.current.innerHTML = "Load more";
        taskContainer.current.style.maxHeight = "230px";
        break;
      default:
        expansionButton.current.innerHTML = "Show less";
        taskContainer.current.style.maxHeight = "480px";
        taskContainer.current.style.overflowY = "auto";
        taskContainer.current.style.scrollbarWidth = "none";
        break;
    }
  };
  return (
    <>
      <Header />
      <Heading />
      <div className="container">
        <DateView />
        <Taskview taskContainerRef={taskContainer} />
        <Expansionbutton
          ref={expansionButton}
          text="Load more"
          onClick={handleExpansionClick}
        />
        <Analytics />
      </div>
      <Footer />
    </>
  );
}

export default App;
