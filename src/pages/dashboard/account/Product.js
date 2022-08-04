import React, { useEffect } from "react";
import MyAccountLayout from "../../../components/layouts/MyAccountLayout";
import Producto from "../../../components/dashboard/myaccount/product/Product";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const Product = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "my1", bool: true, main: "my", mbool: true }));
  }, [dispatch]);

  return (
    <MyAccountLayout setTheme={setTheme} theme={theme}>
      <Producto theme={theme} />
    </MyAccountLayout>
  );
};

export default Product;
