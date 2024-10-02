import styles from "@/styles/Filters.module.css";
import DropdownMenu from "./OptionList";
const Filter = ({ isOpen, onCategorySelect }) => {
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
      <div className={styles.custom}>
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
