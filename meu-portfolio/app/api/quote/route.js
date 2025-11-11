import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/random", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Erro HTTP externo: ${res.status}`);
    }

    const data = await res.json();
    const quote = data[0]; // retorna um array com um objeto

    return NextResponse.json({
      content: quote.q,
      author: quote.a,
    });
  } catch (error) {
    console.error("❌ Erro na rota /api/quote:", error.message);
    return NextResponse.json(
      { error: "Falha ao buscar citação: " + error.message },
      { status: 500 }
    );
  }
}
