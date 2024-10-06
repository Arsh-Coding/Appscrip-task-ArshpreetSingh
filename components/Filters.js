import { useEffect, useState, useRef } from "react";
import styles from "@/styles/Filters.module.css";
import DropdownMenu from "./OptionList";

const Filter = ({ isOpen, onCategorySelect }) => {
  const [isVisible, setIsVisible] = useState(false); // Define isVisible state
  const filterRef = useRef(null);

  // Intersection observer to set visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Set to true when component is in view
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (filterRef.current) {
      observer.observe(filterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Render a placeholder if the component is not visible yet
  if (!isVisible) {
    return <div ref={filterRef} style={{ minHeight: "300px" }} />;
  }

  const titles = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <div className={`${styles.filter} ${isOpen ? styles.show : ""}`}>
      <div className={styles.customstyle}>
        <label>
          <input type="checkbox" />
          <span className={styles.custom_title}>CUSTOMIZABLE</span>
        </label>
      </div>
      <div className={styles.dropdowns}>
        {titles.map((title, index) => (
          <DropdownMenu
            key={index}
            title={title}
            onCategorySelect={onCategorySelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
