import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Paper,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import "./UserSignIn.css";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { userAction } from "../../../redux/slices/user";
import axios from "axios";

export default function UserLogIn() {
  // state
  const validationMsg = useSelector(
    (state: RootState) => state.userDetail.accountValidationMsg
  );
  const isLoggedind = useSelector(
    (state: RootState) => state.userDetail.isLoggedind
  );
  const url = "http://localhost:8001/users/login";
  const userInformation = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  type InitialValues = {
    email: string;
    password: string;
  };
  const initialValues: InitialValues = {
    email: "",
    password: "",
  };
  const FormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(2, "Password should be minimum 2 chars!")
      .max(50, "Too long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      ),
  });
  return (
    <div className="login-page">
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          axios.post(url, values).then((response) => {
            const userData = response.data;
            localStorage.setItem("userDetail", JSON.stringify(userData));
            const token = userData.token;
            if (token) {
              navigate("/");
              dispatch(
                userAction.getUserDetail({
                  email: userData.userEmail,
                  firstName: userData.firstName,
                  lastName: userData.lastName,
                })
              );
              dispatch(userAction.userLogIn());
              return;
            }
            const message = userData.message;
            dispatch(userAction.accountValidationMsg(message));
            resetForm({ values: initialValues });
          });
        }}
      >
        {({ errors, touched, handleChange, values }) => {
          return (
            <Form>
              <Paper
                elevation={0}
                sx={{
                  width: 300,
                  height: 400,
                  mt: 5,
                  background: "#eeeeee",
                }}
              >
                <div className="form-container">
                  <Typography sx={{ mt: 4, mr: 1, fontSize: "30px" }}>
                    Log in
                  </Typography>
                  <IconButton sx={{ color: "inherit" }}>
                    <LoginIcon />
                  </IconButton>

                  <TextField
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    sx={{
                      width: 250,
                      fontSize: "10px",
                      mt: 2,
                    }}
                    size="small"
                  ></TextField>
                  {errors.email && touched.email ? (
                    <div className="error-message"> {errors.email}</div>
                  ) : null}

                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    sx={{ mt: 1, width: 250, borderRadius: 10 }}
                    onChange={handleChange}
                    value={values.password}
                    size="small"
                  />
                  {errors.password && touched.password ? (
                    <div className="error-message"> {errors.password}</div>
                  ) : null}
                  {validationMsg ? (
                    <div className="error-message">{validationMsg}</div>
                  ) : null}
                  <Button
                    type="submit"
                    sx={{
                      width: "250px",
                      height: "40px",
                      mt: 3,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    variant="outlined"
                  >
                    Log in
                  </Button>

                  <Typography
                    component={Link}
                    to="#"
                    fontSize="14px"
                    sx={{
                      ml: 10,
                      mt: 2,
                      textDecoration: "none",
                    }}
                  >
                    Forgot your password?
                  </Typography>
                </div>
              </Paper>
            </Form>
          );
        }}
      </Formik>
      <Box sx={{ mb: 70 }}></Box>
    </div>
  );
}
