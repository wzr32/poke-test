import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import Mainlogo from "@/assets/logo/main_logo.png";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";

import AvatarLogo from "@/assets/logo/avatar.png";
import { handleRemoveLocalData } from "@/utilities";

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleNav = (): void => {
    navigate(PrivateRoutes.PROFILE);
    handleClose();
  };

  const handleLogout = (): void => {
    handleRemoveLocalData();
    navigate(PublicRoutes.LOGIN);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ width: "120px" }}>
              <img
                src={Mainlogo}
                alt="poke-test"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box>
            <IconButton onClick={handleClick}>
              <Avatar src={AvatarLogo} sx={{ background: "white" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleNav}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
