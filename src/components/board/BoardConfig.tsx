import React, { useRef } from "react";
import tw from "tailwind-styled-components";

const Container = tw.div` text-white text-2xl p-2 w-[30rem]  flex flex-col justify-center items-center
 border-4 rounded-3xl border-green-800 bg-green-800 bg-opacity-25`;
const ConfigTitle = tw.div`pb-6 text-white font-ubuntu-c text-3xl`;
const BoardConfig = ({
  setBorderSize,
  setInConfigProcess,
  setCheckSize,
}: {
  setBorderSize: React.Dispatch<React.SetStateAction<number>>;
  setCheckSize: React.Dispatch<React.SetStateAction<number>>;
  setInConfigProcess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const refBorderSize = useRef<HTMLInputElement>(null);
  const refCheckSize = useRef<HTMLInputElement>(null);
  const handleEnter = () => {
    if (!refBorderSize.current) return;
    const val1 = Number.parseInt(refBorderSize.current.value);
    // console.log(val1)
    if(isNaN(val1))return
    if (val1 < 3 || val1 > 100) return;
    if (!refCheckSize.current) return;
    const val2 = Number.parseInt(refCheckSize.current.value);
    // console.log(val2)
    if(isNaN(val2))return
    if (val2 < 3 || val2 > 5) return;
    // console.log(val2)
    if(val2>val1)return;
    
    setBorderSize(val1);
    setCheckSize(val2);
    setInConfigProcess(false);
  };
  return (
    <Container>
      <ConfigTitle>Config - Board Size</ConfigTitle>

      <input
        ref={refBorderSize}
        type="number"
        name="bordersize"
        id="border-size"
        min="3"
        max="30"
        // value='1'
        placeholder="input board size"
        className=" text-black font-thin  text-center py-1 w-72 border-none"
        required
      />
      <span className="text-sm text-gray-700 pt-1 pb-3">
        Hint: Board size; min=3, max=30;
      </span>
      <input
        ref={refCheckSize}
        type="number"
        name="bordersize"
        id="border-size"
        min="3"
        max="5"
        // value='1'
        placeholder="input the number"
        className=" text-black font-thin  text-center py-1 w-72 border-none"
        required
      />
      <span className="text-sm text-gray-700 pt-1 pb-3">
        Hint: The number in a row to win! min=3; max=5;
      </span>
      <input
        onClick={handleEnter}
        type="button"
        value="Enter"
        className=" text-red-900 font-bold text-2xl mt-3 border-2
                w-72 rounded-sm bg-green-200 hover:bg-green-500 cursor-pointer "
      />
    </Container>
  );
};
export default BoardConfig;
