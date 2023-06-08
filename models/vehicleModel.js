import mongoose from "mongoose";
import addLinks from "../middleware/mongoose/addLinks.js";

const { Schema } = mongoose;

const vehicleSchema = new Schema(
  {
    fields: {
      vehicle_class: String,
      pilots: [String],
    },
    model: String,
  },
  { collection: "vehicles" }
);

addLinks(vehicleSchema, "pilots", "pilots");

vehicleSchema.set("toJSON", { virtuals: true });

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);

export default VehicleModel;
