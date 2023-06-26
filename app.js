import React from "react";
import  ReactDOM  from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},
[
    (React.createElement("h1",{id:"c1"},"this is just boring 🥓 ")),
    (React.createElement("h2",{id:"c2"},"this is monotonous!!"))

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);