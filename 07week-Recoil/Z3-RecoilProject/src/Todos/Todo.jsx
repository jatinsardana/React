import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosFamily } from "./Atomfamily";

function Todo() {
  return (
    <>
      <RecoilRoot>
        <Mainapp id={1} />
        <Mainapp id={2} />
        <Mainapp id={3} />
      </RecoilRoot>
    </>
  );
}
function Mainapp({ id }) {
  const curTODO = useRecoilValue(todosFamily(id));
  return <div>
    {curTODO.id} ~ <n />
    {curTODO.title} <n />
    {curTODO.desc}
  </div>;
}

export default Todo;
