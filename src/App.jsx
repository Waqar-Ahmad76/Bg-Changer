import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen fixed inset-0 flex flex-wrap  items-center transition-colors duration-500 ease-in-out"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className=" flex flex-col gap-3 flex-wrap bg-white rounded-full px-4 py-2 fixed top-12 left-10 justify-center items-center  shadow-2xl">
          <button
            onClick={() => setBackgroundColor("red")}
            className="rounded-full px-4 py-1 bg-red-600 outline-none text-white shadow-lg"
          >
            Red
          </button>

          <button
            onClick={() => setBackgroundColor("green")}
            className="rounded-full px-4 py-1 bg-green-600 outline-none text-white shadow-lg"
          >
            Green
          </button>

          <button
            onClick={() => setBackgroundColor("blue")}
            className="rounded-full px-4 py-1 bg-blue-600 outline-none text-white shadow-lg"
          >
            Blue
          </button>

          <button
            onClick={() => setBackgroundColor("olive")}
            className="rounded-full px-4 py-1  outline-none text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setBackgroundColor("gray")}
            className="rounded-full px-4 py-1 bg-gray-600 outline-none text-white shadow-lg"
          >
            Gray
          </button>

          <button
            onClick={() => setBackgroundColor("yellow")}
            className="rounded-full px-4 py-1 bg-yellow-300 outline-none text-white shadow-lg"
          >
            Yellow
          </button>

          <button
            onClick={() => setBackgroundColor("pink")}
            className="rounded-full px-4 py-1 bg-pink-500 outline-none text-white shadow-lg"
          >
            Pink
          </button>

          <button
            onClick={() => setBackgroundColor("purple")}
            className="rounded-full px-4 py-1 bg-purple-600 outline-none text-white shadow-lg"
          >
            Purple
          </button>

          <button
            onClick={() => setBackgroundColor("lavender")}
            className="rounded-full px-4 py-1  outline-none  shadow-lg"
            style={{ backgroundColor: "lavender", color: "#111111" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setBackgroundColor("white")}
            className="rounded-full px-4 py-1 bg-white outline-none text-black shadow-lg"
          >
            White
          </button>

          <button
            onClick={() => setBackgroundColor("black")}
            className="rounded-full px-4 py-1 bg-black outline-none text-white shadow-lg"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
