import mongoose from "mongoose";

const { Schema } = mongoose;

const starshipSchema = new Schema(
    {
        fields: {
            MGLT: String,
            starship_class: String,
            hyperdrive_rating: String,
            pilots: [String]
        },
        model: String,
    },
    { collection: "starships" }
);

const StarshipModel = mongoose.model("Starship", starshipSchema);

export default StarshipModel;