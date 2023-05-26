import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);
  // this create a dispatch function that can recognize actions defined(generated from reducers)
  const dispatch = useDispatch();
  function handleIncrementAmountChange(e) {
    setIncrementAmount(Number(e.target.value));
  }
  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={incrementAmount}
          onChange={handleIncrementAmountChange}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
