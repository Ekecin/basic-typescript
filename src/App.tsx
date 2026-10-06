import './App.css';
import { useState } from "react";
import Def from "./DefObject";
import Display from "./Display";
import Controls from "./Controls";

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: "ekene",
    age: 56,
    male: true,
    title: "The boy"
  };

  return (
    <div>
      <Display count={count} />
      <Controls setCount={setCount} />
      {/* Option A: Spread the object as individual props to match your original Def component */}
      <Def {...userData} />

      {/* Option B: If you prefer passing the object directly, use: <Def obj={userData} /> 
          (Requires updating your Def component interface to accept { obj: Obj }) */}
    </div>
  );
}

export default App;