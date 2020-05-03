import React, { useState } from "react";
import BackDrop from "./BackDrop/BackDrop";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";

function App() {
  const [isOpen, setOpen] = useState(false);
  const SideToggle = () => {
    setOpen(!isOpen);
  };
  const BackDropClick = () => {
    setOpen(false);
  };
  return (
    <div style={{ height: "100%" }}>
      <Toolbar SideToggle={SideToggle} />
      <SideDrawer show={isOpen} />
      {isOpen && (
        <>
          <BackDrop click={BackDropClick} />
        </>
      )}
    </div>
  );
}

export default App;
