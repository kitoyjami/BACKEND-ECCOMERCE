/**
 * 1. Un schema de joi
 * 2. Validar en un try catch 
*/
import joi from 'joi'

const createClientSchema = joi.object({
    // Campos a validar
    name: joi.string().required(),
    lastName: joi.string().required(),
    address: joi.string().required(),
    street:joi.string().required(),
    localidad:joi.string(),
    numExt:joi.string(),
    numInt:joi.string(),
    betweenStreet:joi.string(),
    city:joi.string().required(),
    country:joi.string().required(),
    postalCode:joi.string().required(),
    references:joi.string(),
    email:joi.string().required(),
    password:joi.string().required(),
    phone:joi.string().required(),
})


export default async(req, res, next) => {

        try{
            // TODO: Validacion
            await createClientSchema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.status(400).json({
                msg: 'Error de validación al registrar cliente',
                error
            })
        }
}