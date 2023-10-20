import "./App.css"
import Top from "./Top";
import Activity from "./Activity";
import { useState } from "react";

function App() {
  // How can I establish an array that receives updates from the backend 
  // and transmit it to the Activity Component? Additionally,
  //  how can I ensure that every time a user adds an element in the Activity Component, 
  //  it is pushed to the backend?

  const [activarr,setActivarr] = useState([{id:1,activity:"Have your Breakfast"}])
  return (
    <div className="container">
      <Top/>
      <Activity activarr={activarr} setActivarr={setActivarr}/>
    </div>
  );
}

export default App;
