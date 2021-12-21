const mongoose = require("mongoose");

const { Schema } = mongoose;

const keywordsSchema = new Schema({
    transcript: [{
        transcript: String,
        start_time: { type: String, default: "0.0" },
        end_time: { type: String, default: "0.0" },
        keywords: [{
            keyword: String,
            metadata: [{ type: String }],
            type: {
                type: String,
                default: "Technophrase",
                trim: true,
                required: true,
                enum: ["Techphrase", "NER", "DNN"],
            },
        }, ],
        key_sentence: String,
        sentiment: [{
            start_time: { type: String, default: "0.0" },
            end_time: { type: String, default: "0.0" },
            sentiment: String,
            polarity: Schema.Types.Decimal128,
            subjectivity: Schema.Types.Decimal128,
            sentence: String,
        }, ],
    }, ],
});

const KeywordModel = mongoose.model("Keyword", keywordsSchema, "Keywords");

module.exports = KeywordModel;

// let Keyword = new KeywordModel({
//     transcript: [{
//         transcript: "Good morning, good morning, and welcome to the Steve Jobs theater.",
//         start_time: "400.0",
//         end_time: "7400.0",
//         keywords: [{
//                 keyword: "steve jobs theater",
//                 metadata: [],
//                 type: "DNN",
//             },
//             {
//                 keyword: "good morning",
//                 metadata: [],
//                 type: "DNN",
//             },
//             {
//                 keyword: "steve jobs",
//                 metadata: ["Personal Tech", "Personal Computers"],
//                 type: "Techphrase",
//             },
//             {
//                 keyword: "Steve Jobs",
//                 metadata: [],
//                 type: "NER",
//             },
//         ],
//         key_sentence: "Good morning, good morning, and welcome to the Steve Jobs theater.",
//         sentiment: [{
//                 start_time: "400.0",
//                 end_time: "1600.0",
//                 sentiment: "Very Positive",
//                 polarity: 0.7,
//                 subjectivity: 0.6000000000000001,
//                 sentence: "Good morning",
//             },
//             {
//                 start_time: "4100.0",
//                 end_time: "4900.0",
//                 sentiment: "Very Positive",
//                 polarity: 0.7,
//                 subjectivity: 0.6000000000000001,
//                 sentence: " good morning",
//             },
//             {
//                 start_time: "4900.0",
//                 end_time: "7400.0",
//                 sentiment: "Very Positive",
//                 polarity: 0.8,
//                 subjectivity: 0.9,
//                 sentence: " and welcome to the Steve Jobs theater",
//             },
//         ],
//     }, ],
// });

// Keyword.save((msg, err) => {
//     console.log(err, msg);
// });