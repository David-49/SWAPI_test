import mongoose from "mongoose";

const { Schema } = mongoose;

const planetSchema = new Schema(
    {
        fields: {
            edited: String,
            created: String,
            climate: String,
            surface_water: String,
            name: String,
            diameter: String,
            rotation_period: String,
            terrain: String,
            gravity: String,
            orbital_period: String,
            population: String
        },
        model: String,
    },
    { collection: "planets" }
);

const PlanetModel = mongoose.model("Planet", planetSchema);

export default PlanetModel;
