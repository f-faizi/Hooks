import React, { useCallback, useMemo } from "react";
import { useState } from "react";

function SorttedList({ list, sortFun }) {
  console.log("List is rendering");

  const sorttedlist = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFun);
  }, [list, sortFun]);
  return <div className="bg-black text">{sorttedlist.join(", ")}</div>;
}
const UseMemo = () => {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );
  const [names] = useState(["Zakir", "Jamil", "Abdullah"]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTotal = useMemo(() => count1 + count2, [count1, count2]);

  const sortFun = useCallback((a, b) => a.localeCompare(b), []);
  return (
    <div>
      <p>Total: {total}</p>
      <p>Names: {names.join(", ")}</p>
      <SorttedList list={names} sortFun={sortFun} />
      <button className="btn" onClick={() => setCount1(count1 + 1)}>
        Count1: {count1}
      </button>
      <button className="btn" onClick={() => setCount2(count2 + 1)}>
        {" "}
        count2: {count2}
      </button>
      <p>Total: {countTotal}</p>
    </div>
  );
};
export default UseMemo;
