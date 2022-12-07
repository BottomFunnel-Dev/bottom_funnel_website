import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import ProductsBanner from "./ProductsBanner";
import ProductsGrid from "./ProductsGrid";

export const Products = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <ProductsBanner />
      <ProductsGrid />
    </div>
  );
};
