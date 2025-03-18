import {Pool} from "pg";
import dotenv from "dotenv";

dotenv.config();

//Config de la db
export const pool = new Pool ({ 
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

//Verificar la conexion 

pool.connect()
.then(()=> console.log("Conectando a PostgreSQL"))
.catch (err => console.error("Error de conexion a PostgreSQL:", err));