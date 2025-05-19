import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import DateView from "./components/DateView";
// import Taskview from "./components/Taskview";
import TaskViewWithRedux from "./components/TaskViewWithRedux";
import Expansionbutton from "./components/Expansionbutton";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";

function App() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(1);
  const [createdTasks, setCreatedTasks] = useState(1);
  const taskContainer = useRef();
  const expansionButton = useRef();
  const handleExpansionClick = () => {
    switch (expansionButton.current.innerHTML) {
      case "Show less":
        expansionButton.current.innerHTML = "Load more";
        taskContainer.current.style.maxHeight = "230px";
        taskContainer.current.style.overflowY = "hidden";
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
        <TaskViewWithRedux
          taskContainerRef={taskContainer}
          createdTasks={createdTasks}
          setCreatedTasks={setCreatedTasks}
          setCompletedTasks={setCompletedTasks}
          setPendingTasks={setPendingTasks}
        />
        {/* <Taskview
          taskContainerRef={taskContainer}
          createdTasks={createdTasks}
          setCreatedTasks={setCreatedTasks}
          setCompletedTasks={setCompletedTasks}
          setPendingTasks={setPendingTasks}
        /> */}
        <Expansionbutton
          ref={expansionButton}
          text="Load more"
          onClick={handleExpansionClick}
        />
        <Analytics
          pending={pendingTasks}
          completed={completedTasks}
          created={createdTasks}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
