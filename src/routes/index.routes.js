import { Router } from "express";
import { getIndex } from "../controllers/index.controllers.js";


const routerDb = Router()

routerDb.get("/ping", getIndex)

export default routerDb