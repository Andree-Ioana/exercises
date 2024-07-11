const express = require('express');
const { readData, writeData } = require('../services/dataService');
const req = require('express/lib/request');
const router = express.Router();
const Joi = require('joi');

const itemSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().max(255).optional(),
    price: Joi.number().positive().required()
})


router.get('/', async (req, res) => {
    try {
        const data = await readData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { error } = itemSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
        }

        const data = await readData();
        const newData = { id: Data.now(), ...req.body }
        data.push(newData);
        await writeData(data);
        res.status(201).json(newData);
    } catch (err) {
        res.status(500).json({ error: "Internal Sever Error" });
    }
});


router.put('/:id', async (req, res) => {
    try {

        const { error } = itemSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
        }

        const data = await readData();
        const itemId = parseInt(req.params.id, 10);
        const itemIndex = data.findIndex(item => item.id === itemId);
        if (itemId === -1) {
            return res.status(400).json({ error: 'Item not found' });
        }
        data[itemIndex] = { ...data[itemIndex], ...req.body };
        await writeData();
        res.json(data[itemIndex]);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.delete('/:id', async (req, res) => {
    const data = await readData();
    const itemId = parseInt(req.params.id, 10);
    let removedItem = {};
    const newData = data.filter(item => {
        if (item.id !== itemId) {
            return true;
        }
        removedItem = { ...item };
        return false;
    });
    if (data.length === newData.length) {
        return res.status(404).json({ error: "Item not found" });
    }
    await writeData(newData);
    res.json(removedItem);
});

module.exports = router;