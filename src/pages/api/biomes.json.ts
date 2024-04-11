import { getBiomes } from "../../functions";

export async function GET() {
  const { biomes } = getBiomes();
  return new Response(
    JSON.stringify({
      name: "Biomes",
      data: biomes,
    })
  );
}
