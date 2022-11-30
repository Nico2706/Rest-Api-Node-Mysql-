import { pool } from "../db.js"

export const getEmployees =  async (req, res) =>{
   try {
    const [rows] =  await pool.query("SELECT * FROM employe")
   res.json(rows)
   } catch (error) {
    return res.status(500).json({
        message:"Algo no esta funcionando bien"
    })
   }
}

export const getEmployee =  async (req, res) =>{
    
    try {
        const id = (req.params.id)

    const [rows] = await pool.query(`SELECT * FROM employe WHERE id=${id}`)

    if(rows.length <= 0 ) return res.status(404).json({
        message: "Empleado no encontrado"
    })

    res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:"Algo no esta funcionando bien"
        })
    }
     
 }
 

export const postEmployees =  async (req, res ) => {
    try {
        const {name, salary} = req.body
    const [rows] = await pool.query("INSERT INTO employe (name, salary) VALUES(?, ?)",[name, salary])
    console.log({
        id:rows.insertId,
        name,
        salary,
    });
    } catch (error) {
        return res.status(500).json({
            message:"Algo no esta funcionando bien"
        })
    }
}

export const putEmployees = async (req, res ) => {
   try {
    const {id} = req.params
   const {name, salary} = req.body
  
   const [result] = await pool.query("UPDATE employe SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id] )

    if(result.affectedRows === 0 ) return res.status(404).json({
        message: "El empleado no fue encontrado"
    })

    const [rows] = await pool.query("SELECT * FROM employe WHERE id = ?", [id])

   res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        message:"Algo no esta funcionando bien"
    })
   }
}

export const deleteEmployes = async (req, res ) => {

    try {
        const [result] = await pool.query("DELETE FROM employe WHERE ID = ?", [req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({
        message:"No es posible eliminar debido a que no existe"
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:"Algo no esta funcionando bien"
        })   
    }

}
