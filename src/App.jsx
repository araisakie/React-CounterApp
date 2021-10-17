/* eslint react-hooks/exhaustive-deps: off */
import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  const onClickCountUp = () => setNum((prev) => (prev < 10 ? ++prev : 0));

  const onClickCountDown = () => setNum((prev) => (prev > 0 ? --prev : 0));

  const onClickDisplay = () => setIsDisplay((prev) => !prev);

  return (
    <>
      <p>{isDisplay ? num : null}</p>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
      <button onClick={onClickDisplay}>{isDisplay ? "非表示" : "表示"}</button>
    </>
  );
};

export default App;
