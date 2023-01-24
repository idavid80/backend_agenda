const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  paciente: { id: String },
  fecha: { dia: String, mes: String, ano: String },
  hora: { hora: String, minutos: String },
  solicitud: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Citas", schema)

/*   paciente: { id: String },
  fecha: { dia: String, mes: String, ano: String },
  hora: { hora: [String], minutos: [String] },
  especialidad: { type: Schema.ObjectId, ref: 'Especialidad' },
  solucion: {
    type: Number,
    required: true
  },
  fechaSolicitud: Date,
}) */