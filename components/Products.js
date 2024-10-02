import styles from "@/styles/Products.module.css";
import Image from "next/image";
const ProductItem = ({ product }) => {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <div className={styles.heart}>
        <p>{product.price}</p>
        {/* <Image src="/heart.svg" alt="error" width={10} height={10} /> */}
      </div>
    </div>
  );
};

export default ProductItem;
