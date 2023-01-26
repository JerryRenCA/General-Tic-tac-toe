import React, { useCallback, useContext, useRef } from "react";
import tw from "tailwind-styled-components";
import { OxContext } from "./Board";

const Container = tw.div` bg-green-800 cursor-pointer flex justify-center items-center border-2`;

const Block = ({
  id,
  oxState,
  width,
  setOxState,
}: {
  id: number;
  oxState: number;
  width: number;
  setOxState: React.Dispatch<React.SetStateAction<any[]>>; 
}) => {
  const { oxChoose, setOxChoose,lastBlockClicked,setLastBlockClicked } = useContext(OxContext);
  const blockRef = useRef<HTMLDivElement>(null);
  if (blockRef.current) {
    blockRef.current.style.width = `${width}rem`;
    blockRef.current.style.height = `${width}rem`;
    blockRef.current.style.backgroundColor=`${id==lastBlockClicked?"#44ff44":"#339933"}`
  }
  
  const handleClick = () => {
    if (oxState != 0) return;
    setOxState((prev) => {
      const val = [...prev];
      val[id] = oxChoose;
      return val;
    });
    if (setOxChoose) {
      setOxChoose((p) => -p);
    }
    if (setLastBlockClicked) {
      setLastBlockClicked(id);
    }
  };

  return (
    <Container ref={blockRef} onClick={handleClick}>
      <ShowOX ox={oxState} />
    </Container>
  );
};
const ShowOX = ({ ox }: { ox: number }): JSX.Element => {
  let str = "";
  switch (ox) {
    case 1: {
      str = "X";
      break;
    }
    case -1: {
      str = "O";
      break;
    }
  }
  const styleStr = `text-3xl font-bold ${ox == 1 ? "text-red-600" : "text-blue-600"}`;
  return <div className={styleStr}>{str}</div>;
};
export default Block;
