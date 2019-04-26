const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get()
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't find the projects."
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const projects = await Projects.get(req.params.id)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't find that project."
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const projects = await Projects.insert(req.body)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "There was an error while saving the project to the database."
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const projects = await Projects.update(req.params.id, req.body)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't modify that project."
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const projects = await Projects.remove(req.params.id)
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't delete that project."
        })
    }
})

router.get('/:id/actions', async (req, res) => {
    try {  
        const projects = await Projects.getProjectActions(req.params.id);
        res.status(200).json(projects)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't find that project's actions."
        })
    }
})




module.exports = router