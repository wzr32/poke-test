import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import TitleProfile from "@/assets/titles/profile.png";

import { ArrowBackIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { PrivateRoutes } from "@/models";
import { User } from "@/types";
import { getUserDataWithID } from "@/services";
import { toast } from "react-hot-toast";

import Trainer from "@/assets/trainers/hilbert-bw.png";

const ProfileView: FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    getUserDataWithID()
      .then((data) => setUserData(data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <>
      <Button
        startIcon={<ArrowBackIos />}
        component={NavLink}
        to={`/${PrivateRoutes.DASHBOARD}`}
      >
        back to dashboard
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "80px",
        }}
      >
        <img src={TitleProfile} alt="" style={{ maxWidth: "250px" }} />
      </Box>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <Box sx={{ height: "600px", display: { xs: "none", md: "block" } }}>
              <img
                src={Trainer}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Trainer
            </Typography>
            <Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <TextField
                  fullWidth
                  placeholder="email"
                  disabled
                  value={userData?.email}
                />
                <TextField
                  fullWidth
                  placeholder="first name"
                  disabled
                  value={userData?.first_name}
                />
                <TextField
                  fullWidth
                  placeholder="last name"
                  disabled
                  value={userData?.last_name}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ProfileView;
