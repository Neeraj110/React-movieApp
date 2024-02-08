import React, { useState } from "react";
import "./style.scss";

function SwitchTabs({ data, onTabChanges }) {
  const [selectedtab, setSelectedtab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTabs = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedtab(index);
    }, 800);
     onTabChanges(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedtab === index ? "active" : ""}`}
            onClick={() => activeTabs(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{left}} />
      </div>
    </div>
  );
}

export default SwitchTabs;
