import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Keypress from "../libs/react-keypress";

var Block = (props) => {
  const { color, blockName, desc } = props;
  const [colorNew, setColorNew] = useState(false);

  useEffect(() => {
    console.log(props);
    Keypress([{ keys: props.shortcutKeyVal, on_keydown: changeColor }]);
  });
  const changeColor = (e) => {
    setColorNew(generateColor);
  };
  const generateColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };
  return (
    <div
      className="block-sec {{blockName}}"
      style={{ background: colorNew ? colorNew : color }}
    >
      {desc}
    </div>
  );
};

Block.propTypes = {
  blockName: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
  shortcutKey: PropTypes.string
};
export default Block;
