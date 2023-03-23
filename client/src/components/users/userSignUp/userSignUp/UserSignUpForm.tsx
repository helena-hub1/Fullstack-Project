import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
  OutlinedInput,
  Box,
} from "@mui/material/";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import "./UserSignUpForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import registerUser from "../../../../redux/thunks/user";
import { AppDispatch } from "../../../../redux/store";
import info from "../../../../assets/info.jpg";

export default function UserSignUpForm() {
  // navigate
  const navigate = useNavigate();
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
  // render
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            registerUser(
              values.firstName,
              values.lastName,
              values.email,
              values.password
            )
          );
          console.log(values, "values");
          resetForm({ values: initialValues });
          navigate("/signin");
        }}
      >
        {({ errors, handleChange, touched, values }) => {
          return (
            <Form>
              <div className="field-container">
                <Paper
                  elevation={4}
                  sx={{
                    mt: 4,
                    height: 600,
                    width: 500,
                    backgroundColor: "#eeeeee",
                    mb: 50,
                  }}
                >
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
                    <Typography fontSize="12px">
                      <img
                        src={info}
                        height="15px"
                        width="15px"
                        alt="information icon"
                      ></img>
                      Password must contain at least 8 characters, one number &
                      one special character
                    </Typography>

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
                      <Box component={Link} to="#" sx={{ ml: 1 }}>
                        Terms
                      </Box>
                      . Learn how we collect, use and share your data in our
                      Privacy Policy and how we use cookies and similar
                      technology in our
                      <Box component={Link} to="#" sx={{ ml: 1 }}>
                        Cookies Policy
                      </Box>
                      . You may receive SMS Notifications from us and can access
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
                    <Typography
                      component="div"
                      sx={{ fontSize: "12px", mt: 1 }}
                    >
                      Already have an account?
                      <Box
                        component={Link}
                        to="/signin"
                        sx={{ ml: 1, textDecoration: "none" }}
                      >
                        Sign in
                      </Box>
                    </Typography>
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
