const express = require('express')
const router = express.Router()
const citasService = require('./citas.service')

// routes
router.get('/', getAll)
router.post('/', create)

module.exports = router

function getAll (req, res, next) {
    citasService.getAll()
    .then(citas => res.json(citas))
    .catch(err => next(err))
}

function create (req, res, next) {
  console.log(req.body)

  citasService.create(req.body)
    .then(citas => res.json(citas))
    .catch(err => next(err))
}