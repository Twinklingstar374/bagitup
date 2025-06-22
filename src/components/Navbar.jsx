import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shopping from "../assets/icons/shopping.png";

function Navbar() {
  const [viewHover, setViewHover] = useState(false);
  const [addHover, setAddHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        padding: "10px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        flexWrap: "wrap"
      }}
    >
     
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          fontSize: isMobile ? "18px" : "24px",
          fontWeight: "bold",
          fontStyle: "oblique",
          gap: "8px"
        }}
      >
        BagItUp
        <img width={isMobile ? "24px" : "30px"} height={isMobile ? "24px" : "30px"} src={shopping} alt="logo" />
      </div>

     
      <div
        style={{
          display: "flex",
          gap: isMobile ? "20px" : "60px",
          fontSize: isMobile ? "16px" : "20px",
          paddingRight: isMobile ? "0" : "30px"
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: viewHover ? "grey" : "white",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "20px"
          }}
          onMouseEnter={() => setViewHover(true)}
          onMouseLeave={() => setViewHover(false)}
        >
          View Items
        </Link>
        <Link
          to="/add"
          style={{
            textDecoration: "none",
            color: addHover ? "grey" : "white",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "20px"
          }}
          onMouseEnter={() => setAddHover(true)}
          onMouseLeave={() => setAddHover(false)}
        >
          Add Item
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
