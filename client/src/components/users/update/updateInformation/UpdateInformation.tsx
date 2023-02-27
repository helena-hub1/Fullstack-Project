import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateInformation() {
  // get token & user id from local storage
  const userData =
    localStorage.getItem("userDetail") !== null
      ? JSON.parse(localStorage.getItem("userDetail")!)
      : null;
  const userId = userData.user._id;
  const token = userData.token;
  console.log("user id", userId);
  console.log("token", token);
  const url = `http://localhost:8002/users/${userId}`;

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
    name: Yup.string().min(2, "name too short").max(50, "name too long"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
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
            axios
              .put(url, values, {
                headers: { Authorization: `Bearer ${token} ` },
              })
              .then((response) => console.log(response.data));
            navigate(`/success`);
          }}
        >
          {({ errors, touched, handleChange }) => {
            return (
              <Form>
                <Paper sx={{ width: 300, mt: 4, height: 400 }}>
                  <div className="form-container">
                    <Typography sx={{ mt: 3, fontSize: "20px" }}>
                      Update your detail
                    </Typography>
                    <TextField
                      label="firstName"
                      name="firstName"
                      onChange={handleChange}
                      sx={{ mt: 5, width: 250, fontSize: "10px" }}
                      size="small"
                    ></TextField>
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
                    ) : null}
                    <TextField
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      sx={{ width: 250, mb: 2, mt: 2, fontSize: "10px" }}
                      size="small"
                    ></TextField>
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
                    ) : null}
                    <TextField
                      label="Password"
                      name="password"
                      sx={{ mt: 1, width: 250 }}
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
                        color: "#fff",
                        backgroundColor: "#000",
                      }}
                      variant="outlined"
                    >
                      Update
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
