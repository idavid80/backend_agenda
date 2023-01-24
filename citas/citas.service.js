const db = require('../_helpers/db')
const Citas = db.Citas

// const ObjectId = require('mongodb').ObjectId;

module.exports = {
  getAll,
  create
}

async function getAll () {
  return await Citas.find()
}

async function create (body) {
  const cita = new Citas(body)
  return await cita.save()
}
