import { NextApiRequest } from "next";

import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/model/Product";

export const DELETE = async (request: NextApiRequest) => {
  await dbConnect();

  try {
    const id = request.query.id;

    const product = await ProductModel.findOne({ _id: id });

    if (!product) {
      throw new Error("Received invalid product id!");
    }

    await product.deleteOne();
    return Response.json(
      {
        message: "Products deleted!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on deleting product:", error);
    return Response.json(
      {
        message: "Error on deleting product!",
        success: false,
      },
      { status: 500 }
    );
  }
};
