import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../JS/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div></div>;
};

export default ProductList;
