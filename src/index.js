import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// const App = () => {
//   return (
// returnの内容が複数になる場合は（）で囲いその中で返却する必要がある
// return一つのタグで囲うルール
// <div>は要素となるので
// <React.Fragment>だとレンダリングされないエラー回避に利用
// さらにFragmentは長いので<>でも同じ記法となる
// JSX記法

//   <React.Fragment>
// <h1>こんにちは</h1>
// <p>お元気ですか </p>
// </React.Fragment>
//   <>
//     <h1>こんにちは</h1>
//     <p>お元気ですか </p>
//   </>
// );
// };

ReactDom.render(<App />, document.getElementById("root"));
