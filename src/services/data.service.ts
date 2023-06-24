import { Api } from "@/config/client";
import { PokemonData, PokemonListData } from "@/types";
import { toast } from "react-hot-toast";

const resolvePokemonData = async (
  url: string
): Promise<PokemonData | undefined> => {
  try {
    const { data } = await Api.get(url);
    return data;
  } catch (error) {
    toast.error("error getting pokemon data");
  }
};

export const getPokemonData = async (
  offset: number
): Promise<PokemonListData | undefined> => {
  const resultArray: PokemonData[] = [];

  try {
    const { data } = await Api.get("/pokemon", {
      params: {
        offset: (offset - 1) * 10,
        limit: 10,
      },
    });

    if (data.results !== undefined) {
      for (const elem of data.results) {
        const data = await resolvePokemonData(elem.url);
        const dataIndex = resultArray.findIndex((item) => item.id === data?.id);
        if (data !== undefined && dataIndex < 0) {
          resultArray.push(data);
        }
      }
    }

    return { ...data, results: resultArray };
  } catch (error) {
    toast.error("error on getting pokemons");
  }
};
