const express = require('express');

const Actions = require('./actionModel');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.id)
        res.status(200).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't find that project."
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.id)
        res.status(200).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't find that project."
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const actions = await Actions.insert(req.body)
        res.status(200).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "There was an error while saving the project to the database."
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const actions = await Actions.update(req.params.id)
        res.status(200).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't modify that project."
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const actions = await Actions.remove(req.params.id)
        res.status(200).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't delete that project."
        })
    }
})

router.get('/:id/actions', async (req, res) => {
    try {  
        const actions = await Actions.getProjectActions(req.params.id);
        res.status(200).json(actions)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't find that project's actions."
        })
    }
})

module.exports = router