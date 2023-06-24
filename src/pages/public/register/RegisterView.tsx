import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RegisterType, registerSchema } from "@/schemas";
import { AuthWrap } from "@/components/auth-wrap";
import { PublicRoutes } from "@/models";
import { NavLink, useNavigate } from "react-router-dom";
import { registerService } from "@/services";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const initialState: RegisterType = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  c_password: "",
};

interface ITogglePass {
  pass: boolean;
  c_pass: boolean;
}

const RegisterView: FC = () => {
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
    resolver: zodResolver(registerSchema),
  });

  const [showPass, setShowPass] = useState<ITogglePass>({
    pass: false,
    c_pass: false,
  });

  const handleToggleShowPass = (item: "pass" | "c_pass"): void => {
    const auxObject = { ...showPass };
    Object.assign(auxObject, { [item]: !auxObject[item] });
    setShowPass(auxObject);
  };

  const onSuccess = () => {
    toast.success("Registered user!");
    reset();
    navigate(`/${PublicRoutes.LOGIN}`);
  };

  const onError = (err?: AxiosError) => {
    toast.error(err?.message || "Error on register");
  };

  const onSubmit: SubmitHandler<RegisterType> = ({
    email,
    password,
    firstName,
    lastName,
  }): void => {
    registerService(
      { email, password, firstName, lastName },
      onSuccess,
      onError
    );
  };

  return (
    <AuthWrap>
      <Box sx={{ marginBottom: "30px" }}>
        <Typography fontWeight="bold" fontSize="30px" textAlign="center">
          Register
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "100%",
        }}
      >
        <TextField
          data-cy="register-email"
          {...register("email")}
          fullWidth
          label="Email"
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) && errors.email?.message}
        />
        <TextField
          data-cy="register-first-name"
          {...register("firstName")}
          fullWidth
          label="First Name"
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) && errors.firstName?.message}
        />
        <TextField
          data-cy="register-last-name"
          {...register("lastName")}
          fullWidth
          label="Last Name"
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) && errors.lastName?.message}
        />
        <TextField
          data-cy="register-password"
          {...register("password")}
          fullWidth
          label="Password"
          type={showPass.pass ? "text" : "password"}
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) && errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleToggleShowPass("pass")}
                  size="small"
                >
                  {showPass.pass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          data-cy="register-c_password"
          {...register("c_password")}
          label="Confirm Password"
          type={showPass.c_pass ? "text" : "password"}
          error={Boolean(errors.c_password)}
          helperText={Boolean(errors.c_password) && errors.c_password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleToggleShowPass("c_pass")}
                  size="small"
                >
                  {showPass.c_pass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography>You have an account?</Typography>
          <Typography
            fontWeight="bold"
            component={NavLink}
            to={`/${PublicRoutes.LOGIN}`}
          >
            Sign in
          </Typography>
        </Box>
        <Button
          data-cy="register-submit"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          submit
        </Button>
      </Box>
    </AuthWrap>
  );
};
export default RegisterView;
