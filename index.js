import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoute from "./routes/usuariosRoute.js";

// *En app se gusrdara toda la funcionalidad de express
const app = express();

// *Decirle que enviaremos datos de tipo JSON
app.use(express.json());

// *Escanear el archivo '.env'
dotenv.config();

// *ConectarDB
conectarDB();

// *Dominios permitidos para conectarse
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback){

        // *Origin contiene la URL dónde se hace la petición
        if(whiteList.includes(origin)){
            // *Puede consultar la API
            callback(null, true);
        }
        else{
            // *No esta permitido
            callback(new Error("Error de CORS"));
        }
    }
}

// *Usar CORS
app.use(cors(corsOptions));

// *Ruta Formulario
app.use('/api/test', usuarioRoute);

// *En local tomara el puerto 4000 y en el servidor tomamos una variable de entorno
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
