const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET heartRates
router.get('/', async (req, res) => {
    const heartRates = await loadHeartRatesCollection();
    res.send(await heartRates.find({}).toArray());
});

// ADD heartRates
router.post('/', async (req, res) => {
    const heartRates = await loadHeartRatesCollection();
    await heartRates.insertOne({
        heartRates: req.body.heartRates,
    });
    res.status(201).send();
})

async function loadHeartRatesCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@smartmirror-tsmi5.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    
    return client.db('vue_express').collection('heartRates');
}

module.exports = router;