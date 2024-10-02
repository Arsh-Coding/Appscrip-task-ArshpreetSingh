import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Components";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching products from the Fake Store API
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <Products products={products} />
      <Footer />
    </>
  );
}
