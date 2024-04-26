import mongoose, { Schema, Document } from "mongoose";

interface ProductInterface extends Document {
  keyId: number;
  carplate: string;
  modelName: string;
  price: number;
  reg_date: Date;
  gear: string;
  eng_cap: string;
  veh_type: string;
  mileage: number;
  desc: string;
  posted: Date;
  updated: Date;
  img_link: string;
  status: string;
}

const ProductSchema: Schema<ProductInterface> = new Schema(
  {
    keyId: {
      type: Number,
      required: [true, "Key id is required!"],
      unique: true,
    },
    carplate: {
      type: String,
      required: [true, "Car plate is required!"],
      unique: true,
    },
    modelName: {
      type: String,
      required: [true, "Model name is required!"],
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
    },
    reg_date: {
      type: Date,
      required: [true, "Registration date is required!"],
    },
    gear: {
      type: String,
      required: [true, "Gear is required!"],
    },
    eng_cap: {
      type: String,
      required: [true, "Engine capacity is required!"],
    },
    veh_type: {
      type: String,
      required: [true, "Vehicle type is required!"],
    },
    mileage: {
      type: Number,
      required: [true, "Mileage is required!"],
    },
    desc: {
      type: String,
      required: [true, "Description is required!"],
    },
    posted: {
      type: Date,
      required: [true, "Posted date is required!"],
      default: new Date(),
    },
    updated: {
      type: Date,
      required: false,
    },
    img_link: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: [true, "Status is required!"],
      default: "available",
    },
  },
  { timestamps: true }
);

const ProductModel =
  (mongoose.models.Product as mongoose.Model<ProductInterface>) ||
  mongoose.model<ProductInterface>("Product", ProductSchema);

export default ProductModel;
