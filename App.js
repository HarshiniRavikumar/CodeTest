import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import ProductDetail from "./ProductDetail";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products.splice(0, 10));
    });
  }, []);

  const handleClick = (data) => {
    console.log(data);
    return <ProductDetail details={data}></ProductDetail>;
  };

  return (
    <>
      <h2>{"Product List"}</h2>
      <div data-testid="product-list">
        {data.map((element) => (
          <li>
            <a onClick={() => handleClick(element)}>{element.title}</a>
          </li>
        ))}
      </div>
    </>
  );
}
