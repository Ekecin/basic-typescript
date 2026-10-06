import { useEffect } from "react";
interface ControlsProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Controls({ setCount }: ControlsProps) {
   
   useEffect(() => {
    alert("Controls component mounted");
  }, []);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Increase
    </button>
  );
}

export default Controls;