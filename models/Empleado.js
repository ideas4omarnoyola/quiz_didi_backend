import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({
    // *Required indica que es obligatorio
    // *Trim quita los espacios al ingresar un nombre
    // *Unique indica que es unico
    empleado: {
        type: String,
        required: true,
        trim: true
    },
    generacion: {
        type: String,
        required: true,
        trim: true
    },
    puntos: {
        type: String,
        required: true
    },
    tipo: {
        type: String, 
        required: true
    }
});

// *Registrar modelo
const Empleado = mongoose.model('Empleado', empleadoSchema);

// *Exportar modelo
export default Empleado;