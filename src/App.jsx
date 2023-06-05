import React from "react";
import ColofulMessage from './components/ColorfulMessage';


const App = () => {
  const onClickCountUp = () => {
  setNum(num + 1);
  };
  const[num, setNum] = useSttate(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
     <ColofulMessage color="blue" >お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink" >元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
};

export default App;
