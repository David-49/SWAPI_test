import mongoose from "mongoose";

const { Schema } = mongoose;

const transportSchema = new Schema(
    {
        fields: {
            edited: String,
            consumables: String,
            name: String,
            created: String,
            cargo_capacity: String,
            passengers: String,
            max_atmosphering_speed: String,
            crew: String,
            length: String,
            model: String,
            cost_in_credits: String,
            manufacturer: String,
        },
        model: String,
    },
    { collection: "transport" }
);

const TransportModel = mongoose.model("Transport", transportSchema);

export default TransportModel;