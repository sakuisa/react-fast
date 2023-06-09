import React from "react";

// export　const ColorfulMesseage = (props) => {
// という風に直接exportすることも可能。App.jsxでは分割代入が必要import ｛ColofulMessage｝ from

const ColorfulMesseage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMesseage;
