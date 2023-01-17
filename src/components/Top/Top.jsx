import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../Top/Top.css";
import { Button } from "@mui/material";

const Top = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });

  const [visibility, setVisibility] = React.useState(false);
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });

  return (
    <>
      <span
        id="top"
        onClick={() => setPosition({ ...position })}
        className="circle"
        ref={scrollTop}
      >
        <ExpandLessIcon id="icon-top" />
      </span>
    </>
  );
};

export default Top;
