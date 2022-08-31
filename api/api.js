import express from "express"

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

export default api