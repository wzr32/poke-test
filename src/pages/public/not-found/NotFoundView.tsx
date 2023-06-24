import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";

import NotFound from "@/assets/platform_images/not_found.png";
import { NavLink } from "react-router-dom";
import { PrivateRoutes } from "@/models";

const NotFoundView: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "400px" }}>
        <img
          src={NotFound}
          alt="not-found"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <Button
          component={NavLink}
          to={PrivateRoutes.DASHBOARD}
          variant="outlined"
        >
          Back to home
        </Button>
      </Box>
    </Box>
  );
};
export default NotFoundView;
