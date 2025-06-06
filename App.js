import React from "react";
import ReactDOM from "react-dom/client";

const Tilte = () =>( <h1 id="heading">This is Namaste React using JSX 🚀</h1>);

//react functional components


const HeadingComponent = () => (
  <div id="container">
    <h1>{100+200+700}</h1>
    <h1 className="heading">namaste react functional components</h1>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Tilte/>);
root.render(<HeadingComponent/>)
