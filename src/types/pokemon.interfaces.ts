/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonData[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonData {
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Types[];
  weight: number;
}

interface Type {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

interface Versions {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
}

interface Generationviii {
  icons: Dreamworld;
}

interface Generationvii {
  icons: Dreamworld;
  "ultra-sun-ultra-moon": Home;
}

interface Generationvi {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
}

interface Generationv {
  "black-white": Blackwhite;
}

interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Generationiv {
  "diamond-pearl": Diamondpearl;
  "heartgold-soulsilver": Diamondpearl;
  platinum: Diamondpearl;
}

interface Diamondpearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Generationiii {
  emerald: Officialartwork;
  "firered-leafgreen": Fireredleafgreen;
  "ruby-sapphire": Fireredleafgreen;
}

interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Generationi {
  "red-blue": Redblue;
  yellow: Redblue;
}

interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  "official-artwork": Officialartwork;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

interface Gameindex {
  game_index: number;
  version: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}
