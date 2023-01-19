import Empleado from "../models/Empleado.js";
// ?req lo que enviamos al servidor
// ?res lo que resivimos del servidor

const registrarTest = async (req, res)=>{

    // *req.body no trae lo que le enviamos a la URL
    // const {idEmpleado} = req.body;

    // ? Prevenir si un usuario ya esta registarado
    // *FindOne busca por lo diferentes atributos del modelo
    // const existeUsuario = await Empleado.findOne({idEmpleado});

    

    // if(existeUsuario){
    //     const error = new Error('El empleado ya registro sus respuestas');
    //     return res.status(400).json({msg: error.message});
    // }
    
    try {
        // *Guardar informacion del test
        // *Se crea una nueva instancia con la info que le enviamos
        const respuestas = new Empleado(req.body);

        // *Guardar Respuestas
        const respuestasAlmacenadas = await respuestas.save(); 

        res.json(respuestasAlmacenadas);

    } catch (error) {
        console.log(error);
    }
}

export {
    registrarTest
}