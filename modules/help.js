import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
var Help = (props) => {
  console.log(props);
  const helpMenu = Object.keys(props).map((key) => props[key]);
  console.log(helpMenu);
  return (
    <div className="block-sec">
      Help menu
      {helpMenu.map((block, i) => (
        <div className="help-menu-list">
          {block.shortcutKey} {block.desc}
        </div>
      ))}
    </div>
  );
};
export default Help;
