import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bg-amber-50 rounded-xl px-2 py-2  bottom-4">
      <button onClick={()=>setColor("red")} className="outline-none px-1 py-1 shadow-sm text-white rounded-full " style={{ backgroundColor:"red" }}>
Red
      </button>
       <button onClick={()=>setColor("green")}  className="outline-none px-1 py-1 shadow-sm text-white rounded-full " style={{ backgroundColor:"Green" }}>
Green
      </button>
       <button onClick={()=>setColor("orange")} className="outline-none px-1 py-1 shadow-sm text-white rounded-full " style={{ backgroundColor:"Orange" }}>
Orange
      </button>
       <button onClick={()=>setColor("black")} className="outline-none px-1 py-1 shadow-sm text-white rounded-full " style={{ backgroundColor:"Black" }}>
Black
      </button>
    </div></div>
  );
}

export default App;
