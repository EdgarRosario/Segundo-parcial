import { Request, Response } from "express";
import { pool } from "./db";
 
// datos obtener
export const getData = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM usuarios");
        res.json(result.rows); 
    } catch (error) {
        console.error("Error en getData:", error);
        res.status(500).json({ message: "Error obteniendo datos", error });
    }
};

// datos insertar
export const postData = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, direccion, telefono, edad, correo } = req.body;
        await pool.query(
            "INSERT INTO usuarios (nombre, apellido, direccion, telefono, edad, correo) VALUES ($1, $2, $3, $4, $5, $6)",
            [nombre, apellido, direccion, telefono, edad, correo]
        );
        
        res.json({ message: "Datos insertados correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error insertando datos", error });
    }
};
