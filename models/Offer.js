import mongoose from 'mongoose';
const bodySchema = new mongoose.Schema({
    content: { type: String, required: true },
    items: { type: [String], required: true },
});

const offerSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        company: { type: String, required: true },
        logo: { type: String, required: true },
        logoDesktop: { type: String, required: true },
        logoBackground: { type: Number, required: true },
        position: { type: String, required: true },
        postedAt: { type: String, required: true },
        contract: { type: String, required: true },
        location: { type: String, required: true },
        website: { type: String, required: true },
        apply: { type: String, required: true },
        description: { type: String, required: true },
        requirements: {
            content: { type: String },
            items: [String],
        },
        role: {
            content: { type: String },
            items: [String],
        },
    },
    {
        timestamps: true,
    }
);

const Offer = mongoose.models.Offer || mongoose.model('Offer', offerSchema);
export default Offer;
