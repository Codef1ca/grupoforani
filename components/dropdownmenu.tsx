import React, { useState } from "react";
import { Link } from "@nextui-org/react";

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault(); // Evita la redirección
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{ position: "relative" }}>
      <button onClick={toggleMenu} className="dropdown-toggle">
        Autocenter
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={{ position: "absolute", top: "100%", left: 0 }}>
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="dropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
