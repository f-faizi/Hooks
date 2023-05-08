import React from "react";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Examples from "./components/Examples";
import UseMemo from "./components/UseMemo";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";

const App = () => {
  return (
    <BrowserRouter className="container mx-auto">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="usestate" element={<UseState />} />{" "}
          <Route path="usereducer" element={<UseReducer />} />{" "}
          <Route path="usememo" element={<UseMemo />} />{" "}
          <Route path="useeffect" element={<UseEffect />} />{" "}
          <Route path="useref" element={<UseRef />} />{" "}
          <Route path="examples" element={<Examples />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default App;
