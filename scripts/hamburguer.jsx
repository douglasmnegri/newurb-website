import React, { useState } from "react";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  
};


export default Hamburger;