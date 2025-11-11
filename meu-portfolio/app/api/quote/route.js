// app/api/quote/route.js
export async function GET() {
  try {
    const res = await fetch('https://api.quotable.io/random?tags=technology,inspirational');
    if (!res.ok) {
      throw new Error(`Erro HTTP: ${res.status}`);
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
