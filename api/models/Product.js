import mongoose from "mongoose"

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    secure: true
  });

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
    descripcion:{
        type: String,
        required: true
    },
    especificaciones:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    foto:{
        type: String,
    }

})

export default mongoose.model("Product", schema)