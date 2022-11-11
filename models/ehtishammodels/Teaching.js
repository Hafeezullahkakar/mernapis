var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teachingSchema = new Schema({
    Desigination: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    University: {
        type: String,
        required: true
    },
    Duration: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Teaching', teachingSchema);