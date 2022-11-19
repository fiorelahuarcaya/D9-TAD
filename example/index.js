import React from "react";
import ReactDOM from "react-dom";

import SingletonExample from "./singleton/SingletonExample";
import MementoExample from "./memento/MementoExample";
import BridgeExample from "./bridge/BridgeExample";

const App = () => {
  const [example, setExample] = React.useState();

  return (
    <React.Fragment>
      <div style={{ width: "100%", height: "50px" }}>
        <button children="Singleton" onClick={() => setExample("singleton")} />
        <button children="Memento" onClick={() => setExample("memento")} />
        <button children="Bridge" onClick={() => setExample("bridge")} />
      </div>

      {example === "singleton" && <SingletonExample />}
      {example === "bridge" && <BridgeExample />}
      {example === "memento" && <MementoExample />}
    </React.Fragment>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(<App />, root);
