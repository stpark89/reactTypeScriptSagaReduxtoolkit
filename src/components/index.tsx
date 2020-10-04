import React, { FunctionComponent } from "react";
import SlateComponent from "./editor/Slate";

const MainComponent: FunctionComponent = () => {
  return (
    <div>
      <p>인덱스</p>
      <SlateComponent />
    </div>
  );
};

export default MainComponent;
