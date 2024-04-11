import { readdirSync, readFileSync } from "fs";

import type { Biome, Specie, SpeciesByBiomes } from "./@types";

export function getSpecies() {
  let speciesByBiomes: SpeciesByBiomes = {};
  let species: Specie[] = [];

  const speciesFolder = readdirSync("src/content/species");

  speciesFolder.map((fileName) => {
    const data = readFileSync(`src/content/species/${fileName}`, {
      encoding: "utf-8",
    });
    const jsData = JSON.parse(data) as Specie;

    const biomeName = jsData.biome;

    if (speciesByBiomes[biomeName]) {
      speciesByBiomes[biomeName].push(jsData); // Ajouter l'espèce au biome existant
    } else {
      speciesByBiomes[biomeName] = [jsData]; // Créer un nouveau tableau pour le biome et y ajouter l'espèce
    }
    species.push(jsData);
  });
  species.sort((a, b) => {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);
    return idA - idB;
  });
  return { speciesByBiomes, species };
}

export function getBiomes() {
  const biomes: Biome[] = [];

  const biomesFolder = readdirSync("src/content/biomes");

  biomesFolder.map((fileName) => {
    const data = readFileSync(`src/content/biomes/${fileName}`, {
      encoding: "utf-8",
    });
    const jsData = JSON.parse(data) as Biome;

    biomes.push(jsData);
  });
  return { biomes };
}

export function getModules() {
  const modules = {};


  const modulesFolder = readdirSync("src/content/modules");

  modulesFolder.map((fileName) => {
    const data = readFileSync(`src/content/modules/${fileName}`, {
      encoding: "utf-8",
    });
    const jsData = JSON.parse(data);

    modules[jsData.slug] = jsData
  });



  const sortedModules = Object.values(modules)


  // Sorting the array by date
  sortedModules.sort((a, b) => {
    console.log(a);

    let dateA = parseDate(a.discoveryDate);
    let dateB = parseDate(b.discoveryDate);
    return dateA - dateB;
  });




    return { modules, sortedModules };
}


function parseDate(dateString) {
  let parts = dateString.split(/[-T:]/);
  // Month is 0-indexed, so subtract 1
  return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]);
}
