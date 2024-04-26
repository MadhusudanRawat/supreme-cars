import mongoose, { Schema, Document } from "mongoose";

interface AdminInterface extends Document {
  originalName: string;
  email: string;
  password: string;
}

const AdminSchema: Schema<AdminInterface> = new Schema(
  {
    originalName: {
      type: String,
      required: [true, "Original name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email address is required!"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const AdminModel =
  (mongoose.models.Admin as mongoose.Model<AdminInterface>) ||
  mongoose.model<AdminInterface>("Admin", AdminSchema);

export default AdminModel;
