import { type FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
// import style from '';

import MainLogo from "@/assets/logo/main_logo.png";

interface IAuthWrapProps {
  children: ReactNode;
}

const AuthWrap: FC<IAuthWrapProps> = ({ children }) => {
  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <Box
            sx={{
              margin: "0 auto 30px",
              maxWidth: "250px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={MainLogo}
              alt="poke-test"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthWrap;
