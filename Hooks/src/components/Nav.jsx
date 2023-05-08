import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gray-500 text-white flex items-center justify-center gap-4">
      <Link to="/usestate">useState</Link>
      <Link to="/usereducer">useReducer</Link>
      <Link to="/usememo">useMemo</Link>
      <Link to="/useeffect">useEffect</Link>
      <Link to="/useref">useRef</Link>
      <Link to="/examples">Examples</Link>
    </div>
  );
};

export default Nav;
