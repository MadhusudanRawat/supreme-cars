import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/model/Admin";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  await dbConnect();

  try {
    const { originalName, email, password } = await request.json();
    const adminWithEmail = await AdminModel.findOne({ email });

    if (adminWithEmail) {
      throw new Error("Admin already exist with provided email address!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAdmin = await AdminModel.create({
      originalName,
      email,
      password: hashedPassword,
    });

    return Response.json(
      {
        message: "Admin registration completed!",
        success: true,
        admin: createdAdmin,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error on admin sign up:", error);
    return Response.json(
      {
        message: "Error on admin sign up!",
        success: false,
      },
      { status: 500 }
    );
  }
};
