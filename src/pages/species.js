export default async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      name: "Speciessss",
    })
  );
}
