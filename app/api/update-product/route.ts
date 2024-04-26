import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/model/Product";

export const PATCH = async (request: Request) => {
  await dbConnect();

  try {
    const {
      id,
      carplate,
      modelName,
      price,
      reg_date,
      gear,
      eng_cap,
      veh_type,
      mileage,
      desc,
      img_link,
    } = await request.json();

    const product = await ProductModel.findOne({ _id: id });

    if (!product) {
      throw new Error("Received invalid product id!");
    }

    await product.updateOne({
      carplate,
      modelName,
      price,
      reg_date,
      gear,
      eng_cap,
      veh_type,
      mileage,
      desc,
      img_link,
      updated: new Date(),
    });

    return Response.json(
      {
        message: "Product updated!",
        success: true,
        productId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on updating product:", error);
    return Response.json(
      {
        message: "Error on updating product!",
        success: false,
      },
      { status: 500 }
    );
  }
};
