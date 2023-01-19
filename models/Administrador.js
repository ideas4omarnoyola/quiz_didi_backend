import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    // *Required indica que es obligatorio
    // *Trim quita los espacios al ingresar un nombre
    // *Unique indica que es unico
    nombre: {
        type: String,
        required: true,
        trim: true
    }, 
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});


// *Registrar modelo
const Admin = mongoose.model('Admin', adminSchema);

// *Exportar modelo
export default Admin;