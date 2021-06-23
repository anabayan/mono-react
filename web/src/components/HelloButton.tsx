import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { demoButtonClicked } from "common";

export const HelloButton = () => {
  const count = useSelector((state) => (state as any).demo.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter</h3>
      Count: {count}{" "}
      <button type="button" onClick={() => dispatch(demoButtonClicked())}>
        Click to increase count.
      </button>
    </div>
  );
};
