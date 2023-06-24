import { getPokemonData } from "@/services";
import { PokemonListData } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const usePokemonRequest = (offset: number) => {
  const [data, setData] = useState<PokemonListData | never[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleData = (data: PokemonListData | undefined): void => {
    if (data !== undefined) setData(data);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getPokemonData(offset);
        handleData(data);
      } catch (error) {
        toast.error("error on request");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [offset]);

  return {
    data,
    isLoading,
  };
};
export default usePokemonRequest;
