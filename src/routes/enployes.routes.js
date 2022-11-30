import { Router } from "express";
import { deleteEmployes, getEmployee, getEmployees, postEmployees, putEmployees } from "../controllers/employes.controllers.js";

const router = Router()

router.get("/empleados", getEmployees)

router.get("/empleados/:id", getEmployee)

router.post("/empleados", postEmployees)

router.patch("/empleados/:id",putEmployees)

router.delete("/empleados/:id", deleteEmployes)

export default router