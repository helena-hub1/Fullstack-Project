import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
  OutlinedInput,
  Box,
} from "@mui/material/";
import { VisibilityOff, Visibility, Diversity1 } from "@mui/icons-material";
import "./UserSignUp.css";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import registerUser from "../../../redux/thunks/user";
import { AppDispatch } from "../../../redux/store";

export default function UserSignUp() {
  // state
  const userDetail = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  console.log(userDetail, "from signup");
  // dispatch
  const dispatch = useDispatch<AppDispatch>();
  // MUI
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  type InitialValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const initialValues: InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const FormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    lastName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(2, "Password should be minimum 2 chars!")
      .max(50, "Too long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match.")
      .required("Required"),
  });
  // const url = "http://localhost:8000/users";
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          // axios
          //   .post(url, values)
          //   .then((response) => console.log(response.data));
          // console.log(values);
          dispatch(
            registerUser(
              values.firstName,
              values.lastName,
              values.email,
              values.password
            )
          );
          resetForm({ values: initialValues });
        }}
      >
        {({ errors, handleChange, touched, values }) => {
          return (
            <Form>
              <div className="field-container">
                <Paper elevation={6} sx={{ height: 500, width: 500 }}>
                  <Typography
                    component="div"
                    textAlign="center"
                    sx={{ mt: 2, fontSize: "30px" }}
                  >
                    Create a new account
                  </Typography>
                  <Typography
                    component="div"
                    textAlign="center"
                    sx={{ fontSize: "small" }}
                  >
                    It’s quick and easy.
                  </Typography>
                  <div className="name-container">
                    <div className="first-name">
                      <TextField
                        label="FirstName"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        size="small"
                      ></TextField>
                      {errors.firstName && touched.firstName ? (
                        <p className="error-message"> {errors.firstName}</p>
                      ) : null}
                    </div>
                    <div className="second-name">
                      <TextField
                        label="LastName"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        size="small"
                      ></TextField>
                      {errors.lastName && touched.lastName ? (
                        <p className="error-message"> {errors.lastName}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="field2-container">
                    <TextField
                      label="Email"
                      name="email"
                      sx={{ width: "55ch" }}
                      onChange={handleChange}
                      value={values.email}
                      size="small"
                    ></TextField>
                    {errors.email && touched.email ? (
                      <p className="error-message"> {errors.email}</p>
                    ) : null}
                    <FormControl
                      sx={{ mt: 1, width: "55ch" }}
                      variant="outlined"
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    {errors.password && touched.password ? (
                      <p className="error-message"> {errors.password}</p>
                    ) : null}
                    <FormControl
                      sx={{ mt: 1, width: "55ch" }}
                      variant="outlined"
                      size="small"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-confirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm password"
                      />
                    </FormControl>
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <p className="error-message"> {errors.confirmPassword}</p>
                    ) : null}
                    <Typography
                      fontSize="11px"
                      textAlign="center"
                      margin="10px"
                    >
                      By clicking Sign Up, you agree to our
                      <Box component={Link} to="/">
                        Terms
                      </Box>
                      . Learn how we collect, use and share your data in our
                      Privacy Policy and how we use cookies and similar
                      technology in our
                      <Box component={Link} to="/">
                        Cookies Policy
                      </Box>
                      . You may receive SMS Notifications from us and can opt
                      out any time.
                    </Typography>
                    <Button
                      type="submit"
                      sx={{
                        mt: 2,
                        width: "65ch",
                        height: "40px",
                        backgroundColor: "#000",
                        color: "#FFF",
                      }}
                      variant="outlined"
                      size="small"
                    >
                      Sign Up
                    </Button>
                  </div>
                </Paper>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
