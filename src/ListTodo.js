import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "./sagaActions";

export default function () {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fact);

  console.log(data, 11111);

  return (
    <div>
      <button onClick={() => dispatch({ type: sagaActions.FETCH_DATA_SAGA })}>
        Getdata
      </button>
      {data.fact}
    </div>
  );
}
