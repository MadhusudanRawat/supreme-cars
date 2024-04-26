import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/model/Product";
import { NextApiRequest } from "next";

export const GET = async (request: NextApiRequest) => {
  await dbConnect();

  try {
    const page = request.query.page
      ? parseInt(request.query.page?.toString())
      : 1;

    const products = await ProductModel.find({})
      .skip((page - 1) * 20)
      .limit(20);
    return Response.json(
      {
        message: "Products fetched!",
        success: true,
        products,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on getting product list:", error);
    return Response.json(
      {
        message: "Error on getting product list!",
        success: false,
      },
      { status: 500 }
    );
  }
};
