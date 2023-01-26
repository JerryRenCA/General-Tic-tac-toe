import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Board from "./components/board/Board";
import BoardConfig from "./components/board/BoardConfig";

function App() {
  const [borderSize,setBorderSize]=useState(20)
  const [checkSize,setCheckSize]=useState(5)
  const [inConfigProcess,setInConfigProcess]=useState(true)
  return (
    <div className=" min-h-screen bg-img1 bg-no-repeat bg-cover flex justify-center items-center">
      <div className="">
        <div className="text-6xl text-center text-red-500 p-4 font-satisfy">
          Tic Tac Toe
        </div>
        {inConfigProcess ? (
          <BoardConfig setBorderSize={setBorderSize} setInConfigProcess={setInConfigProcess} setCheckSize={setCheckSize}/>
        ) : (
          <Board borderSize={borderSize} checkSize={checkSize} />
        )}
      </div>
    </div>
  );
}

export default App;
