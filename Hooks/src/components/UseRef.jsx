import React, { useEffect, useState } from "react";
import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const refId = useRef(1);
  const [name, setName] = useState([
    { id: refId.current++, name: "faizi" },
    { id: refId.current++, name: "Ali" },
  ]);
  const onClickButton = () => {
    setName([...name, { id: refId.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };
  return (
    <div>
      <div>
        {name.map((name) => (
          <div key={name.name}>
            {name.id}:{name.name}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button className="btn" onClick={onClickButton}>
        Add name
      </button>
    </div>
  );
};

export default UseRef;
