import React, { useEffect, useState } from "react";
import "./styles.css";
import Block from "../modules/block";
import Help from "../modules/help";

const App = () => {
  const [colorA, setColorA] = useState("#ff1a1a");
  const [colorB, setColorB] = useState("#ff66d9");
  const [colorC, setColorC] = useState("#ffff80");
  const list = [
    {
      shortcutKey: "ctrl+a",
      shortcutKeyVal: "ctrl a",
      blockName: "A",
      color: colorA,
      desc: "Toggle background of A component"
    },
    {
      shortcutKey: "ctrl+b",
      shortcutKeyVal: "ctrl b",
      blockName: "B",
      color: colorB,
      desc: "Toggle background of B component"
    },
    {
      shortcutKey: "ctrl+c",
      shortcutKeyVal: "ctrl c",
      blockName: "C",
      color: colorC,
      desc: "Toggle background of C component"
    }
  ];
  console.log(list);

  return (
    <React.Fragment>
      <div className="app">New App</div>
      <div className="parent-class">
        {list.map((block, i) => (
          <Block
            key={i}
            shortcutKey={block.shortcutKey}
            blockName={block.blockName}
            shortcutKeyVal={block.shortcutKeyVal}
            color={block.color}
            desc={block.desc}
          />
        ))}
        <Help {...list} />
      </div>
    </React.Fragment>
  );
};

export default App;
