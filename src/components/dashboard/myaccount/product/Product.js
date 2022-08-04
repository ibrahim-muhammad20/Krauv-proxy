import React from "react";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <div className="bg-[#E5E5E5] dark:bg-black h-[calc(100vh-264.49px)] overflow-y-scroll relative">
      <div className="pl-6 py-4 sticky top-0 bg-[#E5E5E5] dark:bg-black">
        <h5 className="h5">Inactive Products</h5>
      </div>
      <div className="m-4 shadow">
        <ProductItem
          color="#fff"
          darkColor="#18181A"
          title="Resident Proxies"
        />
        <ProductItem
          color="#F8F8F8"
          darkColor="#141414"
          title="Shared Datacenter Proxies"
        />
        <ProductItem
          color="#fff"
          darkColor="#18181A"
          title="Dedicated Datacenter Proxies"
        />
        <ProductItem
          color="#F8F8F8"
          darkColor="#141414"
          title="SERP Scraper API"
        />
        <ProductItem color="#fff" darkColor="#18181A" title="Web Scraper API" />
        <ProductItem
          color="#F8F8F8"
          darkColor="#141414"
          title="E-Commerce Scraper API"
        />
      </div>
    </div>
  );
};

export default Product;
