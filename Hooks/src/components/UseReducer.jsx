import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "AddAge") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("What just happened");
}

const Age = () => {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <div>
      <button className="btn" onClick={() => dispatch({ type: "AddAge" })}>
        Increment The age {state.age}
      </button>
    </div>
  );
};

const Form2 = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        className="border border-blue-700"
        placeholder="Enter"
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        className="border border-blue-700"
        placeholder="Enter"
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>first : {state.first}</div>
      <div>last : {state.last}</div>
    </div>
  );
};

const Form = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        className="border border-blue-700"
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        className="border border-blue-700"
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>first: {state.first}</div>
      <div>last: {state.last}</div>
    </div>
  );
};

const SecondList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SetName":
          return { ...state, name: action.payload };
        case "AddName":
          return { ...state, names: [...state.names, state.name], name: "" };

        default:
          return state;
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div>
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <input
        type="text"
        className="border border-blue-600"
        onChange={(e) => dispatch({ type: "SetName", payload: e.target.value })}
      />
      <button className="btn" onClick={() => dispatch({ type: "AddName" })}>
        Add Second List
      </button>
      <div>{state.name}</div>
    </div>
  );
};

const ListName = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_Name":
          return { ...state, name: action.payload };
        case "ADD_Name":
          return { ...state, names: [...state.names, state.name], name: "" };
        default:
          return state;
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div>
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <input
        className="border border-blue-600 px-2"
        value={state.name}
        placeholder="useReducer"
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_Name", payload: e.target.value })
        }
      />
      <button className="btn" onClick={() => dispatch({ type: "ADD_Name" })}>
        Add name
      </button>
    </div>
  );
};

const UseReducer = () => {
  return (
    <div>
      <ListName />
      <SecondList />
      <Form />
      <Form2 />
      <Age />
    </div>
  );
};

export default UseReducer;
