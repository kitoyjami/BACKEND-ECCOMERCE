import mongoose from "mongoose"

/**
 * Cosas necesarias para crear un modelo
 * 1. schema
 * 2. nombre
 */

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: [
            'admin',
            'vendedor'
        ],
        default: 'vendedor',
        required: true,
    }

})

export default mongoose.model("Vendedor", schema)