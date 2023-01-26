import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import tw from "tailwind-styled-components";
import Block from "./Block";
import checkWinner, { setOrder } from "./checkWinner";

const Container = tw.div`w-[36rem] h-[36rem] bg-black grid `;
type T_OxContext = {
  oxChoose: number;
  setOxChoose?: React.Dispatch<React.SetStateAction<number>>;
  lastBlockClicked: number;
  setLastBlockClicked?: React.Dispatch<React.SetStateAction<number>>;
};
export const OxContext = createContext<T_OxContext>({ oxChoose: 1,lastBlockClicked:-1 });

const Board = ({ checkSize,borderSize }: { checkSize: number,borderSize:number }) => {
  const [borderWidth,setBorderWidth]=useState(36)
  const [oxChoose, setOxChoose] = useState(-1);
  const [lastBlockClicked,setLastBlockClicked]=useState(-1)
  const initState = new Array(borderSize * borderSize);
  initState.fill(0);

  const [oxState, setOxState] = useState(initState);
  const width = borderWidth / borderSize;
  if(width<2) setBorderWidth(2*borderSize)
  const refBoard = useRef<HTMLDivElement>(null);
  const refRzlt = useRef<HTMLDivElement>(null);
  const str = `repeat(${borderSize}, 1/${borderSize}) / repeat(${borderSize}, 1/${borderSize})`;
  setOrder(borderSize,checkSize);

  let rzlt = checkWinner(oxState);
  if (rzlt) {
    console.log(`${rzlt} win!!`);
  }

  useEffect(() => {
    if (refBoard.current) {
      refBoard.current.style.gridTemplateColumns = `repeat(${borderSize},1fr)`;
      //   refBoard.current.style.gridTemplate=`repeat(${order},1fr) / repeat(${order},1fr)`
    }
  }, []);
  useEffect(()=>{
    if(!refBoard.current)return
    refBoard.current.style.width=`${borderWidth}rem`
    refBoard.current.style.height=`${borderWidth}rem`

  },[borderWidth])
  const handleReset=()=>{rzlt=0;setOxState(initState);setLastBlockClicked(-1);}
  return (
    <div className="relative flex justify-center items-center">
      <Container ref={refBoard}>
        <OxContext.Provider value={{ oxChoose, setOxChoose,lastBlockClicked,setLastBlockClicked }}>
          {Array.from(initState.keys()).map((i) => (
            <Block
              key={i}
              id={i}
              oxState={oxState[i]}
              width={width}
              setOxState={setOxState}
            />
          ))}
        </OxContext.Provider>
      </Container>
      {rzlt&&<div ref={refRzlt} className="absolute w-[36rem] h-[36rem] bg-slate-500 bg-opacity-80 rounded-[5rem]  z-2 flex justify-center items-center flex-col">
            <p className=" h-44 leading-[10rem] text-6xl  font-bold text-red-800
            bg-green-700 w-full text-center border-b-2 border-dashed border-green-800
            hover:text-red-900 cursor-pointer opacity-80">{rzlt==99?'Draw': (rzlt==1?'X  is the Winner!!':'O  is the Winner!!')}</p>
            <button onClick={handleReset} className="w-full font-ubuntu-c text-7xl text-red-900  cursor-pointer rounded-xl p-4 bg-green-700
            hover:bg-green-900 hover:text-white opacity-80">Try again</button>
      </div>}
    </div> 
  );
};
export default Board;
