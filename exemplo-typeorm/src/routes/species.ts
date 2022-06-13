import { Router } from 'express'

import SpeciesController from '../controllers/SpeciesController'
import Species from '../entity/Species'

export const speciesRouter = Router()
const speciesCtrl = new SpeciesController()

speciesRouter.post('/', async (req, res) => {
  const { scientificName, commonName, order, family, habitat } = req.body

  if (scientificName && commonName && order && family && habitat) {
    const species = new Species()
    species.scientificName = scientificName
    species.commonName = commonName
    species.order = order
    species.family = family
    species.habitat = habitat

    const savedSpecies = await speciesCtrl.save(species)
    return res.status(201).json({ species: savedSpecies })
  }

  return res.status(400).json({ message: 'Bad request' })
})

speciesRouter.get('/', async (req, res) => {
  const species = await speciesCtrl.findAll()
  return res.json({ species })
})
