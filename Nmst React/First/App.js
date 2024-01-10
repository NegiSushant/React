const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from react"
);

console.log(heading); // objects
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /* <div id="parent">
  <div id="children">
    <h1></h1>
  </div>
</div>; */
}

//Single child
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm in h1 tag")
//   )
// );

//multiple child
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm in h1 tag"),
    React.createElement("h1", {}, "I'm in h2 tag"),
  ])
);
console.log(parent);
const roots = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{
  /* <div id="parent">
  <div id="child1">
    <h1></h1>
    <h1></h1>
  </div>
  <div id="child2">
    <h1></h1>
    <h1></h1>
  </div>
</div>; */
}

const mlParent = React.createElement("div", { id: "parents" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "inside first child heading 1"),
    React.createElement("h2", {}, "inside first child of heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Inside 2nd child of 1st heading"),
    React.createElement("h2", {}, "inside 2nd child of heading 2"),
  ]),
]);

console.log(mlParent);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(mlParent);
