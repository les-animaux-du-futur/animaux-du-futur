import { getBiomes } from "../../functions";

export async function GET({ params, request }) {
  const { biomes } = getBiomes();
  return new Response(
    JSON.stringify({
      name: "Biomes",
      data: biomes,
    })
  );
}
