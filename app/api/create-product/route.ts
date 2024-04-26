import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/model/Product";

export const POST = async (request: Request) => {
  await dbConnect();

  try {
    const {
      keyId,
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

    const createdItem = await ProductModel.create({
      keyId,
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
    });

    return Response.json(
      {
        message: "Product created!",
        success: true,
        product: createdItem,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error on creating product:", error);
    return Response.json(
      {
        message: "Error on creating product!",
        success: false,
      },
      { status: 500 }
    );
  }
};
