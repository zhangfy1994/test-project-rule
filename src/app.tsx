import * as React from "react";
import "./app.less";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const a;

  return (
    <>
      <div className="hello">hello</div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>click</button>
    </>
  );
};

export default App;
