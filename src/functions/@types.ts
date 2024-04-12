export interface Specie {
  id: string;
  biome: string;
  height: string;
  name: string;
  EvolutionDescription: string;
  weight: string;
  type: string;
  life: string;
  diet: string;
  discoveryDate: string;
  speciesImage: string;
  expedition: string;
  explorator: string;
}

export type SpeciesByBiomes = Record<string, Specie[]>;

export interface Biome {
  name: string;
  biomesImage: string;
  heroDescription: string;
  description: string;
  climat: string;
  temperatureMin: string;
  temperatureMax: string;
  speciesNumber: string;
  color: string;
  url: string
}
