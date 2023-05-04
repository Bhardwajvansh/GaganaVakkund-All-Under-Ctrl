import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import BG from "../asset/background.jpg";
import './signup.css'
import Link from '@mui/material/Link';

const BootstrapButton = styled(Button)({
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#03c988",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const preventDefault = (event) => event.preventDefault();

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${ BG })`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        margin:'0px',
        padding:'0px',
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          border: "1px solid grey",
          borderRadius: "2%",
          padding: "2rem",
          background:'white',
        }}
      >
        <Typography variant="h5" component="h2">
          Login
        </Typography>
        <div>
          <TextField
            label="First Name"
            id="standard-start-adornment"
            sx={{ m: 1, width: "35ch" }}
            variant="standard"
          />
          <br />
          <TextField
            label="Last Name"
            id="standard-start-adornment"
            sx={{ m: 1, width: "35ch" }}
            variant="standard"
          />
          <br />
          <TextField
            type="email"
            label="Email"
            id="standard-start-adornment"
            sx={{ m: 1, width: "35ch" }}
            variant="standard"
          />
          <br />

          <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <br />
          <BootstrapButton
            sx={{ width: "100%" }}
            variant="contained"
            disableElevation
          >
            Log In
          </BootstrapButton>
          <br />
          <br />
          <Typography variant="caption" display="block" gutterBottom>
            Don't have an account?&nbsp;
          <Link href="#">SignUp</Link>
          </Typography>
        </div>
      </Box>
    </Box>
  );
}
