
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const tabs = ["Tab 1","Tab 2","Tab 3"]
  return (
    <div>
        <Tabs tabs={tabs}/>
    </div>
  )
}

export default App
