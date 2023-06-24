import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { LoginType, loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthWrap } from "@/components/auth-wrap";
import { NavLink, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { loginService } from "@/services";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

const initialState: LoginType = {
  email: "",
  password: "",
};

const LoginView = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: initialState,
    resolver: zodResolver(loginSchema),
  });

  const [showPass, setShowPass] = useState<boolean>(false);

  const handleToggleShowPass = (): void => {
    setShowPass((state) => !state);
  };

  const onSuccess = () => {
    toast.success("Registered user!");
    reset();
    navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
  };

  const onError = (err?: AxiosError) => {
    toast.error(err?.message || "Error on login");
  };

  const onSubmit = (data: LoginType) => {
    loginService(data, onSuccess, onError);
  };

  return (
    <AuthWrap>
      <Box sx={{ marginBottom: "30px" }}>
        <Typography fontWeight="bold" fontSize="30px" textAlign="center">
          Login
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <TextField
          {...register("email")}
          fullWidth
          label="email"
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) && errors.email?.message}
        />
        <TextField
          {...register("password")}
          label="password"
          type={showPass ? "text" : "password"}
          fullWidth
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) && errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleToggleShowPass}>
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography>Don't have an account?</Typography>
          <Typography
            fontWeight="bold"
            component={NavLink}
            to={`/${PublicRoutes.REGISTER}`}
          >
            Sign up
          </Typography>
        </Box>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          submit
        </Button>
      </Box>
    </AuthWrap>
  );
};
export default LoginView;
