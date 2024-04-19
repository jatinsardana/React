import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./Store/Atoms/Count";

function Counter() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Btn />
    </div>
  );
}

function CountRender() {
  const count1 = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count1}</b>
      <b> <CountEven /> </b>
    </div>
  );
}

function CountEven() {
  const count = useRecoilValue(countAtom);
  return(
  <div>{(count % 2==0)?"it is even":"it is odd"}</div>
  );
}

function Btn() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
