import React from "react";
import Product from "../product/Product";
import { products } from "@/app/data";

const ProductList = () => {
  return (
    <div>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Create & inspire. It's ADIB</h1>
          <p className="pl-desc">
            ADIB is a creative designer and developer who will do your work smoothly
            Beautiful websites, stunning portfolio styles & a whole lot more awaits
            inside.
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
