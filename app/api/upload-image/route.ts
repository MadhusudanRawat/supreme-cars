import { upload } from "@/lib/upload";

export const POST = async (request: Request) => {
  try {
    const formData = await request.formData();
    const image = formData.get("image") as unknown as File;

    const uploadedImage = await upload(image);

    return Response.json(
      {
        message: "File uploaded to cloudinary!",
        success: true,
        file: uploadedImage,
      },
      { status: 200 }
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
