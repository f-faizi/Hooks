import React, { useState } from "react";

const Persons = () => {
  const [list, setList] = useState(["faiz", "Ali", "Jamal"]);
  const [name, setName] = useState("");

  function addNametoList() {
    setList([...list, name]);
    setName("");
  }
  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        className="px-2 border-2 border-blue-700"
        type="text"
        placeholder="useState"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addNametoList} className="btn">
        Add name
      </button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(10);
  function counting() {
    setCount(count + 1);
  }
  return (
    <div>
      <button className="btn" onClick={counting}>
        Count= {count}
      </button>
    </div>
  );
};

const UseState = () => {
  return (
    <div className="h-fit flex flex-col items-center justify-center">
      <Counter />
      <Persons />
    </div>
  );
};
export default UseState;
