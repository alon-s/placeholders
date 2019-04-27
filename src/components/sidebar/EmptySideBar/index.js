import React from "react";
import { withProps } from "recompose";
import random from "lodash/random";
import EmptySideBarView from "./EmptySideBarView";

function EmptySideBar({ amount }) {
  return <EmptySideBarView amount={amount} />;
}

const withNumberOfPlaceholders = withProps({
  amount: random(4, 7)
});

export default withNumberOfPlaceholders(EmptySideBar);
