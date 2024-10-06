"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import ProductItem from "./Products";
import Filter from "./Filters";
import Pricefilter from "./PriceSort";

const Products = ({ products }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPriceFilterOpen, setPriceFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected category
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(false);

  const filterRef = useRef(null);
  const priceFilterRef = useRef(null);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const togglePriceFilter = () => setPriceFilterOpen(!isPriceFilterOpen);

  // Intersection observers for lazy loading
  useEffect(() => {
    const filterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsFilterVisible(true);
        filterObserver.disconnect();
      }
    });

    const priceFilterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsPriceFilterVisible(true);
        priceFilterObserver.disconnect();
      }
    });

    if (filterRef.current) filterObserver.observe(filterRef.current);
    if (priceFilterRef.current)
      priceFilterObserver.observe(priceFilterRef.current);

    return () => {
      filterObserver.disconnect();
      priceFilterObserver.disconnect();
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

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
          <span onClick={togglePriceFilter}>RECOMMENDED</span>
          {!isPriceFilterOpen ? (
            <Image src="/arrow-down.svg" alt="error" width={20} height={20} />
          ) : (
            <Image src="/arrow-up.svg" alt="error" width={20} height={20} />
          )}

          <div ref={priceFilterRef}>
            {isPriceFilterOpen && isPriceFilterVisible && (
              <Pricefilter Open={true} />
            )}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div ref={filterRef}>
          {isFilterOpen && isFilterVisible && (
            <Filter onCategorySelect={handleCategorySelect} isOpen={true} />
          )}
        </div>
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
