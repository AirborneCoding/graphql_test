const mongoose = require("mongoose");

const CATEGORIES = {
    'EDUCATION': 'Education',
    'FICTION': 'Fiction',
    'NON_FICTION': 'Non-Fiction',
    'SCIENCE_FICTION': 'Science Fiction',
    'HISTORY': 'History',
    'MYSTERY': 'Mystery',
    'SELF_HELP': 'Self-Help',
    'BIOGRAPHY': 'Biography',
};


const BookSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        genre: {
            type: String,
            required: true,
            enum: Object.values(CATEGORIES),
        },
        pages: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
);

module.exports = mongoose.model("Books", BookSchema)