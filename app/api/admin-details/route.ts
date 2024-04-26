import { NextApiRequest } from "next";

import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/model/Admin";

export const GET = async (request: NextApiRequest) => {
  await dbConnect();

  try {
    const id = request.query.id;
    const admin = await AdminModel.findOne({ _id: id });

    if (!admin) {
      throw new Error("Received invalid admin id!");
    }

    return Response.json(
      {
        message: "Admin details fetched!",
        success: true,
        admin,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on getting admin details:", error);
    return Response.json(
      {
        message: "Error on getting admin details!",
        success: false,
      },
      { status: 500 }
    );
  }
};
