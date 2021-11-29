import * as React from "react";
import { RecoilRoot } from "recoil";
import "./app.less";
import Count from "./count";

const App: React.FC = () => {
  return (
    <React.Suspense fallback={null}>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </React.Suspense>
  );
};

export default App;
