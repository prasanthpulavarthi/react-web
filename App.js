import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello world from react 1"
);
console.log(heading);
const heading1 = <h1 id="head">jsx element</h1>;
console.log(heading1);
const Compo = () => <h1>component composition</h1>;
const Comp = () => {
  return (
    <>
      <Compo />
      <h1>function component</h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp />);
