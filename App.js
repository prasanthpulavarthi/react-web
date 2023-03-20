const heading = React.createElement("h1", {}, "Hello world from react");
const heading1 = React.createElement("h1", {}, "Hello world from react1");

const root = ReactDOM.createRoot(document.getElementById("root"));
const roott = ReactDOM.createRoot(document.getElementById("roott"));
root.render(heading);
roott.render(heading1);
