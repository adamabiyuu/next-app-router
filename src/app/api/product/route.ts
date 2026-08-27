import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Sepatu baru",
    price: 100000,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/19695ecc-e748-43a9-97f0-5cae899bce82/GIANNIS+FREAK+8+LE+EP.png",
  },
  {
    id: 2,
    title: "Sepatu baru dong",
    price: 1000000,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/19695ecc-e748-43a9-97f0-5cae899bce82/GIANNIS+FREAK+8+LE+EP.png",
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
