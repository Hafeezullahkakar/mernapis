const mongoose = require('mongoose')


const adminSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,

    },
    email: {
        type: String,



    },
    password: {
        type: String,


    },
},
    {
        timestamps: true,
    }
)

const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin