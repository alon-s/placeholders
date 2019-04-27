import React from "react";
import range from "lodash/range";
import "./EmptySideBarView.scss";
import random from "lodash/random";
import length from "./placeholderLength.scss";

const lengthClasses = lengths.map(item => item.split(':')[0]);
function EmptySideBarView({ amount }) {
  return (
    <div className="empty-facets">
      {range(amount).map(index => {
        const currentLength = lengthClasses[random(lengthClasses.length)];
        return <div key={index} className={`placeholder ${currentLength}`} />;
      })}
    </div>
  );
}

export default EmptySideBarView;
