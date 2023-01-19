import mongoose from "mongoose";

// *Crear la configuración a la base de datos 

const conectarDB = async ()=>{
    try {

        // ? procces.env permite entrar a las variables de entonrno
        const db = await mongoose.connect(process.env.MOONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;