import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Paper,
  Typography,
  Divider,
  Card,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateForm() {
  // state
  const isLoggedInd = localStorage.getItem("userLoggedInd");
  // navigate
  const navigate = useNavigate();
  // type
  type InitialValues = {
    firstName: string;
    lastName: string;
    email: string;
  };
  // initial values
  const initialValues: InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  // schema
  const FormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "name too short")
      .max(50, "name too long")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "name too short")
      .max(50, "name too long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
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
          }}
        >
          Access is denied! Please log in first.
        </Typography>
      </Card>
    );
  }

  return (
    <div className="login-page-update">
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            const userData = JSON.parse(localStorage.getItem("userDetail")!);
            const userId = userData.userId;
            const token = userData.token;
            const url = `http://localhost:8001/users/${userId}`;
            axios
              .put(url, values, {
                headers: { Authorization: `Bearer ${token} ` },
              })
              .then((response) =>
                localStorage.setItem(
                  "updatedDetail",
                  JSON.stringify(response.data)
                )
              );
            navigate(`/success`);
          }}
        >
          {({ errors, touched, handleChange }) => {
            return (
              <Form>
                <Paper
                  sx={{
                    width: 300,
                    mt: 10,
                    height: 400,
                    backgroundColor: "#eeeeee",
                    mb: 50,
                  }}
                >
                  <div className="form-container">
                    <Typography sx={{ mt: 3, fontSize: "20px" }}>
                      Update your detail
                    </Typography>
                    <Divider />
                    <TextField
                      label="firstName"
                      name="firstName"
                      required
                      onChange={handleChange}
                      sx={{ mt: 5, width: 250, fontSize: "10px" }}
                      size="small"
                    ></TextField>
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
                    ) : null}
                    <TextField
                      label="lastName"
                      name="lastName"
                      required
                      sx={{ mt: 1, width: 250 }}
                      onChange={handleChange}
                      size="small"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="error-message"> {errors.lastName}</div>
                    ) : null}

                    <TextField
                      label="Email"
                      name="email"
                      required
                      onChange={handleChange}
                      sx={{ width: 250, mb: 2, mt: 2, fontSize: "10px" }}
                      size="small"
                    ></TextField>
                    {errors.email && touched.email ? (
                      <div className="error-message"> {errors.email}</div>
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
      <Box sx={{ mb: 50 }}></Box>
    </div>
  );
}
