import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/model/Admin";
import bcrypt from "bcryptjs";

export const PATCH = async (request: Request) => {
  await dbConnect();

  try {
    const { id, password, newPassword } = await request.json();
    const admin = await AdminModel.findOne({ _id: id });

    if (!admin) {
      throw new Error("Received invalid admin id!");
    }

    const isMatched = await bcrypt.compare(password, admin.password);

    if (!isMatched) {
      throw new Error("Old password is incorrect!");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await admin.updateOne({ password: hashedPassword });

    return Response.json(
      {
        message: "Password updated!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error on updating password:", error);
    return Response.json(
      {
        message: "Error on updating password!",
        success: false,
      },
      { status: 500 }
    );
  }
};
