import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardContentProps,
  CardMedia,
  CardProps,
  Chip,
  Typography,
  styled,
} from "@mui/material";

interface IStyledCardProps {
  img: string;
  weight: number;
  name: string;
  moves: string[];
  onClick: () => void;
}

const StyledCard = styled(Card)<CardProps>(() => ({
  borderRadius: "15px",
  border: "1px solid #e6e6e6",
  WebkitBoxShadow: "0px 10px 7px -3px rgba(0,0,0,0.7)",
  MozBoxShadow: "0px 10px 7px -3px rgba(0,0,0,0.7)",
  boxShadow: "0px 10px 7px -3px rgba(0,0,0,0.7)",

  /**
   * CardMedia is styled inside the card styles.
   * This happens because, if it is styled independently,
   * the 'component' prop won't work properly.
   */

  "& .MuiCardMedia-root": {
    height: "245px",
    width: "100%",
    position: "relative",
    backgroundSize: "60%",

    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0) 68%, rgba(239,83,80,0.4514180672268907) 94%)",
    },
  },
}));

const StyledCardContent = styled(CardContent)<CardContentProps>(() => ({
  padding: "30px 25px 15px",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
}));

const TwoFactorInput: FC<IStyledCardProps> = ({
  img,
  weight,
  name,
  moves,
  onClick,
}): JSX.Element => {
  return (
    <StyledCard onClick={onClick}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="div" image={img} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            position: "absolute",
            bottom: 10,
            padding: "0 40px",
          }}
        >
          <Chip label={`Weight: ${weight}`} color="primary" />
        </Box>
      </Box>
      <StyledCardContent>
        <Typography fontWeight="bold" fontSize="18px" gutterBottom>
          {name.toUpperCase()}
        </Typography>
        {moves.map((move) => (
          <Typography component="span" key={move}>
            #{move}
          </Typography>
        ))}
      </StyledCardContent>
    </StyledCard>
  );
};

export default TwoFactorInput;
