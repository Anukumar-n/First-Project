import { useState } from "react";

export default function ClickHover() {
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => console.log("Button clicked!");

  return (
    <div style={{ marginTop: "50px" }}> 
    <h2>Hover and Click</h2>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: isHovered ? "#4CAF50" : "#008CBA",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Hover and Click Me
      </button>
    </div>
  );
}
