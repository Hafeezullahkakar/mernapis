var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userModel = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
    },
    bio: {
        type: String,
    },
    email: {
        type: String,
    },

    password: {
        type: String,

    },
    certificates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Certifications'
    }],
    teaching_experience: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teaching'
    }],
    publication_journal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'journalarticals'
    }],

    publication_theses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theses'
    }],
    publication_conference: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conferencepapers'
    }],
    managment_experience: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'managements'
    }],
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', userModel);