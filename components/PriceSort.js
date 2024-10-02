import styles from "@/styles/Filters.module.css";

const Pricefilter = ({ Open }) => {
  return (
    <div className={`${styles.filter} ${Open ? styles.priceshow : ""}`}>
      <div className={styles.custom}>
        <label>
          <input type="checkbox" checked={true} />
          <span className={styles.custom_title}>RECOMMENDED</span>
        </label>
        <div className="dropdown-toggle">
          <div>
            <p>NEWEST FIRST</p>
          </div>
        </div>
        <div className="dropdown-toggle">
          <div>
            <p>POPULAR</p>
          </div>
        </div>
        <div className="dropdown-toggle">
          <div>
            <p>PRICE:HIGH TO LOW</p>
          </div>
        </div>
        <div className="dropdown-toggle">
          <div>
            <p>PRICE:LOW TO HIGH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricefilter;
