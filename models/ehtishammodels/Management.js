var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var managementSchema = new Schema({
    Desigination: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Organistion: {
        type: String,
        required: true
    },
    Duration: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Management', managementSchema);