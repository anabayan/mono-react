import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { demoButtonClicked } from "common/actions/demo";

export const HelloButton = () => {
  const count = useSelector((state) => (state as any).demo.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Hello, Redux</h3>
      Count: {count}{" "}
      <button type="button" onClick={() => dispatch(demoButtonClicked())}>
        Click to increase count.
      </button>
    </div>
  );
};
