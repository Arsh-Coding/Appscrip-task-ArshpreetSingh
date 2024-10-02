import React, { useState } from "react";
import Image from "next/image";
import "@/styles/Filters.module.css";

const dropboxMenu = ({ title, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    let updatedOptions = [...selectedOptions];

    // Toggle the selected option
    if (updatedOptions.includes(value)) {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    } else {
      updatedOptions.push(value);
    }

    setSelectedOptions(updatedOptions);

    // Pass back selected categories to parent component
    onCategorySelect(value);
  };

  return (
    <div className="dropbox">
      <div className="dropbox-toggle" onClick={toggleMenu}>
        <div>
          <p> {title}</p>
          <p className="all_text">All</p>
        </div>
        <div>
          <Image src="/arrow-down.svg" alt="error" width={24} height={24} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="dropbox-menu">
          <label>
            <span>
              <a href="/">Unselect All</a>{" "}
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              value="men's clothing"
              checked={selectedOptions.includes("men's clothing")}
              onChange={handleOptionChange}
            />
            <span>MEN    </span>
          </label>
          <label>
            <input
              type="checkbox"
              value="women's clothing"
              checked={selectedOptions.includes("women's clothing")}
              onChange={handleOptionChange}
            />
            <span>WOMEN    </span>
          </label>
          <label>
            <input
              type="checkbox"
              value="electronics"
              checked={selectedOptions.includes("electronics")}
              onChange={handleOptionChange}
            />
            <span>Electronics    </span>
          </label>
          <label>
            <input
              type="checkbox"
              value="jewelery"
              checked={selectedOptions.includes("jewelery")}
              onChange={handleOptionChange}
            />
            <span>Jewelery    </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default dropboxMenu;
