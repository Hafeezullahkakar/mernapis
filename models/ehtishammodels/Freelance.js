var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FreelanceSchema = new Schema({
    FreelanceCategory: {
        type: String,
        required: true
    },
    Organistaion: {
        type: String,
        required: true
    },

    Duration: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Freelance', FreelanceSchema);