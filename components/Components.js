"use client";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import ProductItem from "./Products";
import Filter from "./Filters";
import { useState } from "react";
import Pricefilter from "./PriceSort";
const Products = ({ products }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected category
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const [isPriceFilteropen, setPriceFilter] = useState(false);
  const togglepriceFilter = () => setPriceFilter(!isPriceFilteropen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category, or return all products if no category is selected
  const filteredProducts =
    selectedCategory.length > 0
      ? products.filter((product) =>
          selectedCategory.includes(product.category)
        )
      : products;

  return (
    <>
      <div className={styles.products_nav}>
        <div className={styles.items}>
          <div className={styles.number_item}>
            {filteredProducts.length} Items
          </div>
          <div className={styles.show_filter} onClick={toggleFilter}>
            <Image src="/arrow-left.svg" alt="error" width={20} height={20} />
            {!isFilterOpen ? (
              <span>SHOW FILTER</span>
            ) : (
              <span>HIDE FILTER</span>
            )}
          </div>
        </div>

        <div className={styles.recom}>
          <span onClick={togglepriceFilter}>RECOMMENDED</span>
          {!isPriceFilteropen ? (
            <Image src="/arrow-down.svg" alt="error" width={20} height={20} />
          ) : (
            <Image src="/arrow-up.svg" alt="error" width={20} height={20} />
          )}

          {isPriceFilteropen ? <Pricefilter Open={true} /> : ""}
        </div>
      </div>
      <div className={styles.section}>
        {isFilterOpen && (
          <Filter onCategorySelect={handleCategorySelect} isOpen={true} />
        )}
        <div className={styles.container}>
          {filteredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
