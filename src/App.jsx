import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import DateView from "./components/DateView";
import Taskview from "./components/Taskview";
import Expansionbutton from "./components/Expansionbutton";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";

/**
 * id => random number
 * title => string
 * body => string
 * status => completed|pending|cancelled
 * date => date-month-year
 */
function App() {
  return (
    <>
      <Header />
      <Heading />
      <div className="container">
        <DateView />
        <Taskview />
        <Expansionbutton />
        <Analytics />
      </div>
      <Footer />
    </>
  );
}

export default App;
