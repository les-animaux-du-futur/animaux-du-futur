import { getSpecies } from "../../functions";

export async function GET({ params, request }) {
  const { species } = getSpecies();
  return new Response(
    JSON.stringify({
      name: "Species",
      data: species,
    })
  );
}
