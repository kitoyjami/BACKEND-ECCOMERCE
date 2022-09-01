import mongoose from "mongoose"

/**
 * Cosas necesarias para crear un modelo
 * 1. schema
 * 2. nombre
 */

const schema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    correo:{
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