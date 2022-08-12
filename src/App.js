 import React from "react";
import { useDispatch } from "react-redux";
import { ActiveAction, DesactiveAction } from "./actions/ActiveAction";

function App() {
 const dispatch = useDispatch()
  const Active = () =>{
    ActiveAction(true,dispatch)
  }

  const Desavtive = () =>{
    DesactiveAction(false,dispatch)
  }
  return (
   <div>
    <button onClick={Active}>ACTIVE</button>
    <button onClick={Desavtive}>DESACTIVE</button>
    <h1>hello</h1>
   </div>
  );
}

export default App;
