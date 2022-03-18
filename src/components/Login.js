import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Login = () => {
  const PaperStyle = {
    padding: "20px",
    height: "50vh",
    width: 380,
    margin: "50px auto",
    backgroundColor: 'rgb(241 228 228)',
  };
  const avatarStyle = { backgroundColor: "#2b669f",  margin:'8px 0'};
  const buttonStyle={margin:'8px 0', backgroundColor: "#437597" }

  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          SIGN IN
        </Grid>
        <br></br>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <br></br>
        <TextField
          label="Password"
          placeholder="Enter Password"
          fullWidth
          required
          type={"password"}
        />
          <br></br>
          
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me" style={{fontSize:1}}
        />
        <Button type="submit" fullWidth variant="contained" style={buttonStyle}>
          Sign in
        </Button>
        <br></br>
        <Typography>
          <Link href="#">Forgot Password</Link>
        </Typography>
<br></br>
        <Typography>New Account ?
          <Link href="#">Sign Up</Link>
        </Typography>

      </Paper>
    </Grid>
  );
};
export default Login;
