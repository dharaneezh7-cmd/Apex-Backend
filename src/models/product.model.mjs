import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true
        },
        product_price:
        {
            type:String,
            required:true
        },
        product_discription:
        {
            type: String,
            required:true,
        },
        product_review:
        {
            type:String,
        }
    },
    {
        timestamps: true
    }
);

export const product = mongoose.model("products", productSchema);