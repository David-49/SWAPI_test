import mongoose from "mongoose";

const { Schema } = mongoose;

const vehicleSchema = new Schema(
    {
        fields: {
            vehicle_class: String,
            pilots: [String]
        },
        model: String,
    },
    { collection: "vehicles" }
);

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);

export default VehicleModel;