import express from "express"
import router from "./routes/enployes.routes.js"
import routerDb from "./routes/index.routes.js"



const app = express()
app.listen(3000)

app.use(express.json())
app.use("/api",router)
app.use("/api",routerDb)



console.log("servidor corriendo en el puerto" + 3000)