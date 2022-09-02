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
    address: {
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    localidad:{
        type: String,

    },
    numExt:{
        type: String,
    },
    numInt:{
        type: String,
    },
    betweenStreet:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    postalCode:{
        type: String,
    },
    references:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

export default mongoose.model("Client", schema)