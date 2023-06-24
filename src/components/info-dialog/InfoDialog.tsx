import { PokemonData } from "@/types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface IinfoDialogProps {
  show: boolean;
  pokemon: PokemonData | null;
  onClose: () => void;
}

const InfoDialog: FC<IinfoDialogProps> = ({ show, pokemon, onClose }) => {
  return (
    <Dialog open={show} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: "30px" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold" fontSize="22px" gutterBottom>
              {pokemon?.name.toUpperCase()}
            </Typography>

            <Typography fontWeight="bold" fontSize="18px">
              Abilities
            </Typography>
            {pokemon?.abilities.map((item) => (
              <Typography key={item.ability.name} component="span">
                #{item.ability.name}{" "}
              </Typography>
            ))}

            <Typography fontWeight="bold" fontSize="18px">
              Moves
            </Typography>
            {pokemon?.moves.map((item) => (
              <Typography key={item.move.name} component="span">
                #{item.move.name}{" "}
              </Typography>
            ))}

            <Typography fontWeight="bold" fontSize="18px">
              Stats
            </Typography>
            {pokemon?.stats.map((item) => (
              <Typography key={item.stat.name} component="span">
                #{item.stat.name}{" "}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ padding: "30px" }}>
        <Button variant="contained" onClick={onClose}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default InfoDialog;
