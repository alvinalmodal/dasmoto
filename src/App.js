import React from "react";
import "./App.css";
import Header from "./components/header";
import Product from "./components/product";

const products = [
  {
    id: 1,
    name: "Hacksaw Brushes",
    category: "Brushes",
    imgURL: "/assets/images/hacksaw.jpeg",
    description:
      "Made of the highest quality oak, Hacksaw brushes are known for their weight and ability to hold paint in large amounts. Available in different sizes.",
    price: 3.0,
    UOM: "brush",
    backgroundColor: "mediumspringgreen",
  },
  {
    id: 2,
    name: "Art Frames (assorted)",
    category: "Frames",
    imgURL: "/assets/images/frames.jpeg",
    description:
      "Assorted frames made of different material, including MDF, birchwood, and PDE. Select frames can be sanded and painted according to your needs.",
    price: 2.0,
    UOM: "frame",
    backgroundColor: "lightcoral",
  },
  {
    id: 3,
    name: "Clean Finnish Paint",
    category: "Paint",
    imgURL: "/assets/images/finnish.jpeg",
    description:
      "Imported paint from Finland. Over 256 colors available in-store, varying in quantity (1 oz. to 8oz.). Clean Finnish paint microbinds to canvas, increasing the finish and longetivity of any artwork.",
    price: 5.0,
    UOM: "tube",
    backgroundColor: "skyblue",
  },
];

function App() {
  const displayProducts = () =>
    products.map((product) => (
      <Product product={product} id={product.id}></Product>
    ));

  return (
    <React.Fragment>
      <Header></Header>
      <section>{displayProducts()}</section>
    </React.Fragment>
  );
}

export default App;
