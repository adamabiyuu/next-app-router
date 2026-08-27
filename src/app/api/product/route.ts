import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: "Sepatu baru",
    price: 100000,
  },
  {
    id: 2,
    name: "Sepatu baru dong",
    price: 1000000,
  },
];
export async function GET(request: NextRequest) {
  console.log(request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "Success!", data: detailProduct });
    }
    return NextResponse.json({ status: 404, message: "Product not found", data: {} });
  }
  return NextResponse.json({ status: 200, message: "Success!", data });
}
