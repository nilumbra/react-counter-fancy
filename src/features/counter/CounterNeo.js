import React from "react";
import { useSelector } from "react-redux";

export function CounterNeo() {
  const countStars = useSelector((state) => starGen(state.counter.value));
  function starGen(count) {
    console.log(count);
    return Array(count).fill("*").join("");
  }
  return (
    <div>
      <h3> Neo Counter </h3>
      {countStars}
    </div>
  );
}
