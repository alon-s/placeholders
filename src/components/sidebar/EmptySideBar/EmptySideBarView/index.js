import React from "react";
import range from "lodash/range";
import "./EmptySideBarView.scss";
import random from "lodash/random";

const lengths = ["long", "medium", "short", "very-short"];
function EmptySideBarView({ amount }) {
  return (
    <div className="empty-facets">
      {range(amount).map(index => {
        const currentLength = lengths[random(lengths.length)];
        return <div key={index} className={`placeholder ${currentLength}`} />;
      })}
    </div>
  );
}

export default EmptySideBarView;
