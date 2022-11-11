var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var industrySchema = new Schema({
    Designation: {
        type: String,
        required: true
    },
    SoftwareHouse: {
        type: String,

    },
    Organisation: {
        type: String,
        required: true

    },
    Duration: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('Industry', industrySchema);