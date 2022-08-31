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
    apellido:{
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    calle:{
        type: String,
        required: true
    },
    localidad:{
        type: String,

    },
    nroExterior:{
        type: String,
    },
    nroInterior:{
        type: String,
    },
    entreCalle:{
        type: String,
    },
    ciudad:{
        type: String,
    },
    pais:{
        type: String,
    },
    codigoPostal:{
        type: String,
    },
    referencias:{
        type: String,
    },
    correo:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    contacto:{
        type: String,
    }
})

export default mongoose.model("User", schema)