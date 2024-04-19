import React from "react";

function CardWrap() {
  return (
    <div>
      <CardWrap>
        <CardWrap>
          <Hello tittle={"jatin"} />
          <br />
          <CardWrap>
            <Hello tittle={"Sardana"} />
          </CardWrap>
        </CardWrap>
      </CardWrap>
    </div>
  );
}
function CardWrap({ children }) {
  return (
    <div className="border border-black  m-3 rounded-3xl p-2">{children}</div>
  );
}

function Hello({ tittle }) {
  return (
    <div>
      <h1>
        my name is <p className=" font-bold text-xl">{tittle}</p>
      </h1>
    </div>
  );
}

export default CardWrap;
