import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/model/Admin";

export const PATCH = async (request: Request) => {
  await dbConnect();

  try {
    const { id, originalName, email } = await request.json();
    const admin = await AdminModel.findOne({ _id: id });

    if (!admin) {
      throw new Error("Received invalid admin id!");
    }

    await admin.updateOne({ originalName, email });

    return Response.json(
      {
        message: "Admin details updated!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on updating admin details:", error);
    return Response.json(
      {
        message: "Error on updating admin details!",
        success: false,
      },
      { status: 500 }
    );
  }
};
