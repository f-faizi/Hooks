import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div> Time: {time}</div>;
};

const UseEffect = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setName(data));
  }, []);
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);
  const onSelectNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };
  return (
    <div>
      {/* <StopWatch /> */}
      {name.map((name, index) => (
        <button
          key={index}
          className="p-4"
          onClick={() => {
            onSelectNameChange(name);
          }}
        >
          {name}
        </button>
      ))}
      <p>{JSON.stringify(selectedNameDetails)}</p>
    </div>
  );
};

export default UseEffect;
