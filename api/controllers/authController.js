import Client from '../models/Client.js'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import config from "../config/index.js"


const register = async(req,res) => {

    try {
        /**
         * middleware de validacion
         * encriptar el password
         * guardar usuario nuevo con el pass encriptado
         */
        const encryptedPass = await bcrypt.hash(req.body.password,4)
        req.body.password = encryptedPass
        const client = await Client.create(req.body)
        client.password = undefined
        return res.json({
            msg: 'Usuario creado',
            data: { client }
        })
    } catch (error)
    {
        if(error.code === 11000){
            return res.status(400).json({
                msg: 'Ya existe un usuario registrado con ese correo',
                error
            })             
        }
        return res.status(500).json({
            msg: 'Ocurrio un error al registra un usuario',
            error
        })
    }

}

const login = async(req, res) =>{
    /**
     * 1.- Validar que venga pass y correo
     * 2.- Buscar un usuarios con ese correo 
     * 3.- Comparar contraseñas con bcrypt 
     * 4.- Si todo coincide crear token y regresarlo
     * 5.- Si no coincide regresar un 401
     */

    try{
        const client = await Client.findOne({
            email: req.body.email,
        })
        if (!client){
            return res.status(404).json({
                msg: 'Usuario no encontrado'
            })
        }
        const passCorrect=await bcrypt.compare(req.body.password
            , client.password)
        if (!passCorrect){
            return res.status(401),json({
                msg: 'Credenciales inválidas'
            })
        }

        const expirationDate= new Date()
        expirationDate.setMinutes(today.getMinutes()+3)

        const payload = {
            clientId : client.id,
            expirationDate
        }

        const token= jwt.encode(payload,config.jwt.secret)

        return res.json({
            msg: 'Login correcto',
            data: { token }
        })
    } catch (error){
        return res.status(500).json({
            msg: 'Error al hacer login'
        })
    }

}


export {login, register}