import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/model/Product";

export const PATCH = async (request: Request) => {
  await dbConnect();

  try {
    const { id, status } = await request.json();

    const product = await ProductModel.findOne({ _id: id });

    if (!product) {
      throw new Error("Received invalid product id!");
    }

    await product.updateOne({ status });

    return Response.json(
      {
        message: "Product status updated!",
        success: true,
        productId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on updating product status:", error);
    return Response.json(
      {
        message: "Error on updating product status!",
        success: false,
      },
      { status: 500 }
    );
  }
};
