import React, { useEffect } from "react";
import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import maestro from "../../../assets/maestro.svg";
import visaelectron from "../../../assets/visa-electron.svg";
import visa from "../../../assets/visa.svg";
import mastercard from "../../../assets/mastercard.svg";
import dankort from "../../../assets/dankort.svg";

import { AppDispatch, RootState } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { getCartList } from "../../../redux/thunks/cart";
import CartList from "../cartList/CartList";
import { getOrderList } from "../../../redux/thunks/order";
import Product from "../../../../../common/product";
import Cart from "../../../../../common/cart";
import "./CartListPage.css";
import axios from "axios";
import { orderAction } from "../../../redux/slices/order";
import { cartAction } from "../../../redux/slices/cart";
export default function CartListPage() {
  // state
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  const orderList = useSelector(
    (state: RootState) => state.orderList.orderList
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);
  console.log(orderList, "orderList");
  type InitialValues = {
    quantity: number;
    totalPrice: number;
    street: string;
    city: string;
    country: string;
    postalCode: number;
    email: string;
    telephone: number;
    isDelivered: boolean;
  };
  const FormSchema = Yup.object().shape({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    postalCode: Yup.number().required("Required"),
    isDelivered: Yup.boolean().required("required"),
    email: Yup.string().email("Invalid email").required("Required!"),
    telephone: Yup.number().required("Required"),
  });
  const initialValues: InitialValues = {
    quantity: 1,
    totalPrice: 1,
    street: "",
    city: "",
    country: "",
    postalCode: 1,
    isDelivered: false,
    email: "",
    telephone: 1,
  };
  const userData =
    localStorage.getItem("userDetail") !== null
      ? JSON.parse(localStorage.getItem("userDetail")!)
      : null;
  const userId = userData.user._id;

  const token = userData.token;
  //   const url = `http://localhost:8002/orders/${userId}`;
  const url = "http://localhost:8000/orders/63f092c5e0cae816ba3ba58a";
  // console.log(cartList, " from cart list");
  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartList.map((cartProduct: Cart) => (
          <CartList cartProduct={cartProduct} />
        ))}
        <Typography fontSize="20px">Total price:</Typography>
      </div>
      <div className="formik-container">
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values, { resetForm }) => {
            axios
              .post(url, values)
              .then((response) => response.data)
              .then((data) => {
                console.log(data, "cart page order");
              });
            //  console.log(values);
            resetForm({ values: initialValues });
          }}
        >
          {({ errors, handleChange, touched, values }) => {
            return (
              <Form>
                <Paper sx={{ mt: 10, width: "300px", height: "680px" }}>
                  <div className="form-field">
                    <Typography sx={{ mt: 2, fontSize: "large" }}>
                      Shipping Address
                    </Typography>
                    <TextField
                      size="small"
                      name="city"
                      label="City"
                      onChange={handleChange}
                      value={values.city}
                    />
                    {errors.city && touched.city ? (
                      <div className="error-message"> {errors.city}</div>
                    ) : null}
                    <TextField
                      size="small"
                      name="country"
                      label="Country"
                      onChange={handleChange}
                      value={values.country}
                    />
                    {errors.country && touched.country ? (
                      <div className="error-message"> {errors.country}</div>
                    ) : null}
                    <TextField
                      size="small"
                      name="postalCode"
                      label="PostalCode"
                      onChange={handleChange}
                      value={values.postalCode}
                    />
                    {errors.postalCode && touched.postalCode ? (
                      <div className="error-message"> {errors.postalCode}</div>
                    ) : null}
                    <TextField
                      size="small"
                      name="street"
                      label="Street"
                      onChange={handleChange}
                      value={values.street}
                    />
                    {errors.street && touched.street ? (
                      <div className="error-message"> {errors.street}</div>
                    ) : null}
                    <TextField
                      size="small"
                      name="email"
                      label="Email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
                    ) : null}
                    <TextField
                      size="small"
                      name="telephone"
                      label="Tel. number:"
                      onChange={handleChange}
                      value={values.telephone}
                    />
                    {errors.telephone && touched.telephone ? (
                      <div className="error-message"> {errors.telephone}</div>
                    ) : null}
                    <div className="shipping-information">
                      <Typography sx={{ mt: 1 }}>isDelivered</Typography>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="isDelivered"
                        onChange={handleChange}
                        value={values.isDelivered}
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          sx={{ fontSize: "small" }}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          sx={{ fontSize: "small" }}
                          label="No"
                        />
                      </RadioGroup>
                    </div>
                    {errors.isDelivered && touched.isDelivered ? (
                      <div className="error-message"> {errors.isDelivered}</div>
                    ) : null}
                    <div className="payment">
                      <Typography sx={{ mt: 2, fontSize: "small" }}>
                        We accept:
                      </Typography>
                      <img
                        src={maestro}
                        alt="maestro"
                        height="50px"
                        width="30px"
                      />
                      {/* <img src={mobilepay} alt="mobilepay" height="50px" width="30px" /> */}
                      <img
                        src={visaelectron}
                        alt="visaelectron"
                        height="50px"
                        width="30px"
                      />
                      <img
                        src={dankort}
                        alt="dankort"
                        height="50px"
                        width="30px"
                      />
                      <img
                        src={mastercard}
                        alt="dankort"
                        height="50px"
                        width="30px"
                      />
                      <img
                        src={visa}
                        alt="dankort"
                        height="50px"
                        width="30px"
                      />
                    </div>
                    <Button
                      type="submit"
                      sx={{
                        width: "250px",
                        height: "40px",
                        mt: 3,
                        borderRadius: "5",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                      variant="outlined"
                    >
                      Checkout
                    </Button>
                  </div>
                </Paper>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
