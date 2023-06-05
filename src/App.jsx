import React from "react";
import ColofulMessage from './components/ColorfulMessage';


const App = () => {
  const onClickButton = () => alert();
  
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
     <ColofulMessage color="blue" message = "お元気ですか？" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
