import express from "express"
import authRoutes from "./routes/authRoutes.js"

const api = express()

// Todo: configurar Middlewares

api.use(express.json())

api.get("/status", (req, res) => {
    return res.json({
        msg: "API en linea y funcionando"
    })
})

// to do => por hacer
// TODO: Aca se registran las rutas

api.use(authRoutes)


export default api