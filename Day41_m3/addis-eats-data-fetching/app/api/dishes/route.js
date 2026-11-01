import { dishes } from "@/lib/dishes";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q")?.trim().toLowerCase();

  if (!query) {
    return Response.json(dishes);
  }

  const results = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(query),
  );

  return Response.json(results);
}
