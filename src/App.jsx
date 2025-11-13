import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColro] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen fixed inset-0 flex flex-wrap justify-center items-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className=" flex flex-wrap bg-white rounded-xl px-4 py-2 fixed bottom-12 justify-center items-center">
          <button className="rounded-2xl px-2 py-1 bg-red-600 ">Red</button>
        </div>
      </div>
    </>
  );
}

export default App;
