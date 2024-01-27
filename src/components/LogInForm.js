// LogInForm.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Stack,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Alert,
  Modal,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormProvider, FTextField, FCheckbox } from "./form/index";

import { useAuth } from "../contexts/AuthContext";

function LogInForm({ callback }) {
  const auth = useAuth();

  const defaultValues = {
    email: "belukotu@shibainu.com",
    password: "ThanhDepTrai",
    remember: true,
  };
  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const handleMouseDownPassword = (e) => e.preventDefault();

  const onSubmit = async (data) => {
    try {
      await auth.signin(data.email, callback);
      console.log("User has logged in:", auth.user);
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Box>
      <Typography variant="h3" textAlign="center" mb={3}>
        Log In
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField name="email" label="Email address" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FCheckbox name="remember" label="Remember me" />
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            loading={isSubmitting}
          >
            Log In
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  );
}

export default LogInForm;