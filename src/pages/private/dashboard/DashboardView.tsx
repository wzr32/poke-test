import { Loader } from "@/components/loader";
import { StyledCardWithMui } from "@/components/styled-card";
import { usePokemonRequest } from "@/hooks";
import { PokemonData, PokemonListData } from "@/types";
import { Box, Grid, Pagination, Typography } from "@mui/material";

import { useState } from "react";
import { InfoDialog } from "@/components/info-dialog";

import TitlePokedex from "@/assets/titles/pokedex.png";

const DashboardView = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(
    null
  );
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [pagination, setPagination] = useState<number>(1);

  const { data: pokemonData, isLoading } = usePokemonRequest(pagination);
  const { next, previous, count, results } = pokemonData as PokemonListData;

  const handleOpenDialog = (pokemon: PokemonData): void => {
    setSelectedPokemon(pokemon);
    setShowDialog(true);
  };

  const handleCloseDialog = (): void => {
    setShowDialog(false);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "calc(100dvh - 64px)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Loader />
      </Box>
    );
  }

  if (results !== undefined) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={TitlePokedex} alt="" style={{ maxWidth: "250px" }} />
        </Box>
        <Box sx={{ margin: "80px 0" }}>
          <Grid container spacing={4}>
            {results
              .sort((a, b) => a.id - b.id)
              .map((item) => (
                <Grid
                  data-cy="item-data"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={item.id}
                >
                  <StyledCardWithMui
                    img={item.sprites.other["official-artwork"].front_default}
                    weight={item.weight}
                    onClick={() => handleOpenDialog(item)}
                  >
                    <Typography fontWeight="bold" fontSize="18px" gutterBottom>
                      {item.name.toUpperCase()}
                    </Typography>
                    <Typography component="span">
                      #{item.moves[0].move.name}
                    </Typography>{" "}
                    <Typography component="span">
                      #{item.moves[1].move.name}
                    </Typography>
                  </StyledCardWithMui>
                </Grid>
              ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "100px",
          }}
        >
          <Pagination
            count={count}
            defaultPage={1}
            page={pagination}
            size="large"
            variant="outlined"
            shape="rounded"
            onChange={(_, page) => setPagination(page)}
            hidePrevButton={previous === null}
            hideNextButton={next === null}
          />
        </Box>
        <InfoDialog
          show={showDialog}
          onClose={handleCloseDialog}
          pokemon={selectedPokemon}
        />
      </>
    );
  }
};
export default DashboardView;
