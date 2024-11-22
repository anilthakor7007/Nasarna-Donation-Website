import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../common/api";
import "./style.scss";
import { useAuth } from "../../context/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, updateDonarData, updateDonarCausesData } = useAuth(); // Update context imports

  const [value, setValue] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    e.preventDefault();

    // Check if validation is successful
    if (validator.allValid()) {
      try {
        const response = await apiService.post("/users/login", {
          email: value.email,
          password: value.password,
        });

        const token = response?.data?.token;
        const user = response?.data?.user;

        if (user?._id) {
          const donorResponse = await apiService.get("/donors");
          const donors = donorResponse?.data;

          console.log("donor", donors);

          // Safely find the matching donor
          const matchingDonor = donors.find(
            (donor) => donor.userId?.email === user.email
          );

          console.log("matching", matchingDonor);

          if (matchingDonor) {
            const donorId = matchingDonor._id;
            try {
              const causesDonorsResponse = await apiService.get(
                `/causes/${donorId}/donations`
              );
              const causesData = causesDonorsResponse?.data;

              // Save donor and causes data
              updateDonarData(matchingDonor); // Assuming you already have these functions
              updateDonarCausesData(causesData); 
              console.log("causesDonorsResponse", causesDonorsResponse);
            } catch (error) {
              console.error("Error fetching causes donors data:", error);
              toast.error("Error fetching causes data. Please try again.");
            }
          } else {
            console.error("No matching donor found for the user.");
            toast.error("No matching donor found.");
          }
        } else {
          toast.error("Invalid user data received.");
        }

        login(token, user);

        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
        });
        
        navigate("/home");
      } catch (error) {
        console.error("Login failed:", error); // Log the full error for more details
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      // If validation fails, show error messages
      validator.showMessages();
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message("email", value.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
