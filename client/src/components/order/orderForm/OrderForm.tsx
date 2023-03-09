import React from "react";
import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
  Card,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import createOrderThunk from "../../../redux/thunks/order";
import maestro from "../../../assets/maestro.svg";
import visaelectron from "../../../assets/visa-electron.svg";
import visa from "../../../assets/visa.svg";
import mastercard from "../../../assets/mastercard.svg";
import dankort from "../../../assets/dankort.svg";
import { AppDispatch, RootState } from "../../../redux/store";
import "./OrderForm.css";
import { cartAction } from "../../../redux/slices/cart";

export default function OrderForm() {
  // state
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  const totalPrice = Math.round(
    cartList.reduce(
      (accum, product) => accum + product.price * product.cartItemQty,
      0
    )
  );
  const isLoggedInd = useSelector(
    (state: RootState) => state.userDetail.isLoggedind
  );
  // dispatch
  const dispatch = useDispatch<AppDispatch>();
  // get userId from local storage
  const navigate = useNavigate();
  type InitialValues = {
    quantity: number;
    totalPrice: number;
    street: string;
    city: string;
    country: string;
    postalCode: number;
    email: string;
    phoneNumber: number;
    isDelivered: boolean;
  };
  const FormSchema = Yup.object().shape({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    postalCode: Yup.number().required("Required"),
    isDelivered: Yup.boolean().required("required"),
    email: Yup.string().email("Invalid email").required("Required!"),
    phoneNumber: Yup.number().required("Required"),
    quantity: Yup.number().required("Required"),
    totalPrice: Yup.number().required("Required"),
  });
  const initialValues: InitialValues = {
    quantity: 1,
    totalPrice: 1,
    // shippingAddress: {
    street: "",
    city: "",
    country: "",
    postalCode: 1,
    // },
    isDelivered: false,
    email: "",
    phoneNumber: 1,
  };
  if (!isLoggedInd) {
    return (
      <Card
        className="order-login"
        sx={{
          width: 600,
          height: 100,
          my: 10,
          backgroundColor: "#eeeeee",
          mb: 50,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "20px",
            color: "#002e5c",
          }}
        >
          Access is denied! Please log in first.
        </Typography>
      </Card>
    );
  }

  return (
    <div className="formik-form">
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            createOrderThunk(
              cartList,
              values.quantity,
              totalPrice,
              values.street,
              values.city,
              values.country,
              values.postalCode,
              values.email,
              values.phoneNumber,
              values.isDelivered
            )
          );
          console.log("cart list", cartList);
          console.log("values", values);
          dispatch(cartAction.clearCart());
          resetForm({ values: initialValues });
          navigate("/order");
        }}
      >
        {({ errors, handleChange, touched, values }) => {
          return (
            <Form>
              <Paper
                sx={{
                  my: 5,
                  width: "500px",
                  height: "570px",
                  backgroundColor: "#eeeeee",
                }}
              >
                <div className="form-field">
                  <div className="textfield-container">
                    <div className="shipping">
                      <Typography sx={{ mt: 2, fontSize: "large" }}>
                        Shipping Address
                      </Typography>
                      <TextField
                        size="small"
                        name="city"
                        label="City"
                        onChange={handleChange}
                        value={values.city}
                        sx={{ width: "200px" }}
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
                        sx={{ width: "200px" }}
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
                        sx={{ width: "200px" }}
                      />
                      {errors.postalCode && touched.postalCode ? (
                        <div className="error-message">{errors.postalCode}</div>
                      ) : null}
                      <TextField
                        size="small"
                        name="street"
                        label="Street"
                        onChange={handleChange}
                        value={values.street}
                        sx={{ width: "200px" }}
                      />
                      {errors.street && touched.street ? (
                        <div className="error-message"> {errors.street}</div>
                      ) : null}
                    </div>
                    <div className="contact">
                      <Typography sx={{ mt: 2, fontSize: "large" }}>
                        Contact Information
                      </Typography>
                      <TextField
                        size="small"
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        value={values.email}
                        sx={{ width: "200px" }}
                      />
                      {errors.email && touched.email ? (
                        <div className="error-message"> {errors.email}</div>
                      ) : null}
                      <TextField
                        size="small"
                        name="phoneNumber"
                        label="Phone number:"
                        onChange={handleChange}
                        value={values.phoneNumber}
                        sx={{ width: "200px" }}
                      />

                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div className="error-message">
                          {errors.phoneNumber}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="payment-container">
                  <div className="payment-one">
                    <Typography sx={{ mt: 1 }}>isDelivery</Typography>
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
                    {errors.isDelivered && touched.isDelivered ? (
                      <div className="error-message">{errors.isDelivered}</div>
                    ) : null}
                  </div>
                  <div className="payment-two">
                    <Typography sx={{ mt: 2, fontSize: "small" }}>
                      We accept:
                    </Typography>
                    <img
                      src={maestro}
                      alt="maestro"
                      height="50px"
                      width="30px"
                    />
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
                    <img src={visa} alt="dankort" height="50px" width="30px" />
                  </div>
                  <Button
                    type="submit"
                    sx={{
                      width: "400px",
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
  );
}
