import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import "./UserSignIn.css";
import login from "../../../assets/login.jpg";
import axios from "axios";

import { userAction } from "../../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../../redux/slices/cart";
import { orderAction } from "../../../redux/slices/order";
import { AppDispatch, RootState } from "../../../redux/store";
import { loginUserThunk } from "../../../redux/thunks/user";
import { getCartListThunk } from "../../../redux/thunks/cart";
import cars from "../../../assets/NewAudimodel.jpg";
// import { getCartList } from "../../../redux/thunks/cart";

// const url = "http://localhost:8002/users/login";

export default function UserLogIn() {
  // state
  const userInformation = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  console.log(userInformation, "from signin page");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  type InitialValues = {
    email: string;
    password: string;
  };
  // initial values
  const initialValues: InitialValues = {
    email: "",
    password: "",
  };
  // schema
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
      <div className="signin-image">
        <img src={cars} alt="car-image" />
      </div>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            dispatch(loginUserThunk(values.email, values.password));
            // dispatch(getCartListThunk());
            navigate(`/user`);
          }}
        >
          {({ errors, touched, handleChange }) => {
            return (
              <Form>
                <Paper
                  // elevation={4}
                  sx={{
                    // backgroundColor: "aliceblue",
                    width: 400,
                    // mt: 4,
                    // height: "100,
                  }}
                >
                  <div className="form-container">
                    <Typography sx={{ mt: 5, fontSize: "30px" }}>
                      Log in
                    </Typography>
                    <IconButton sx={{ color: "inherit" }}>
                      <LoginIcon />
                    </IconButton>

                    <TextField
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      // variant="standard"
                      sx={{
                        width: 250,
                        fontSize: "10px",
                        mt: 2,
                      }}
                      // style={{ borderRadius: 25 }}
                      size="small"
                    ></TextField>
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
                    ) : null}
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      // variant="standard"
                      // helperText="8 Chars, One(A-Z), One(a-z) and One(0-9)"
                      sx={{ mt: 1, width: 250, borderRadius: 10 }}
                      onChange={handleChange}
                      size="small"
                    />
                    {errors.password && touched.password ? (
                      <div className="error-message"> {errors.password}</div>
                    ) : null}
                    <Button
                      type="submit"
                      sx={{
                        width: "250px",
                        height: "40px",
                        mt: 3,
                        borderRadius: "10px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                      variant="outlined"
                    >
                      Log in
                    </Button>
                    <Typography
                      component={Link}
                      to="/signup"
                      fontSize="14px"
                      sx={{
                        ml: 10,
                        mt: 2,
                        textDecoration: "none",
                      }}
                    >
                      Don't have an account?
                    </Typography>
                  </div>
                </Paper>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
    // </div>
  );
}
