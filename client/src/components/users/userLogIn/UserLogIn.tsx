import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Paper,
  AvatarGroup,
  Avatar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import "./UserLogIn.css";
import login from "../../../assets/login.jpg";
import { blue, pink } from "@mui/material/colors";

const url = "http://localhost:8000/users";

export default function UserLogIn() {
  const navigate = useNavigate();

  type Login = {
    email: string;
    password: string;
  };
  // initial values
  const initialValues: Login = {
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
      .matches(/[0-9]/, "Password should contain a number!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      ),
  });

  return (
    <div className="login-page">
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            navigate(`/${values.email}`);
          }}
        >
          {({ errors, touched, handleChange }) => {
            return (
              <Form>
                <Paper elevation={6} sx={{ width: 300, mt: 4, height: 500 }}>
                  <AvatarGroup>
                    <Avatar
                      alt="login-avatar"
                      // src={login}
                      sx={{
                        width: 80,
                        height: 80,
                        alignItems: "center",
                        mt: 5,
                        mr: 13,
                      }}
                    />
                  </AvatarGroup>
                  <div className="form-container">
                    <TextField
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      variant="standard"
                      sx={{ width: 250, fontSize: "10px" }}
                    ></TextField>
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
                    ) : null}
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      variant="standard"
                      helperText="8 Chars, One(A-Z), One(a-z) and One(0-9)"
                      sx={{ mt: 1, width: 250 }}
                      onChange={handleChange}
                    />
                    {errors.password && touched.password ? (
                      <div className="error-message"> {errors.password}</div>
                    ) : null}
                    <TextField
                      label="Confirm password"
                      name="password"
                      type="password"
                      variant="standard"
                      sx={{ width: 250 }}
                      onChange={handleChange}
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
                        borderRadius: "5",
                      }}
                      variant="outlined"
                    >
                      Log in
                    </Button>

                    <Typography
                      component={Link}
                      to="/register"
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
  );
}
