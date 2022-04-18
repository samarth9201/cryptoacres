const mongoose = require('mongoose')

const MetadataSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    external_url:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String
    },
    animation_url:{
        type: String
    },
    attributes:{
        type:{
            type: String,
        },
        verified:{
            type: Boolean
        }
    }
})

const Metadata = mongoose.model('metadata', MetadataSchema)

module.exports = Metadata