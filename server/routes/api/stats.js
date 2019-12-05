const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET stats
router.get('/', async (req, res) => {
    const stats = await loadStatsCollection();
    res.send(await stats.find({}).toArray());
});

// ADD stats
router.post('/', async (req, res) => {
    const stats = await loadStatsCollection();
    await stats.insertOne({
        id: req.body.id,
        day: req.body.day,
        // day: new Date().getDay(),
        type: req.body.type,
        duration: req.body.duration,
        workoutDone: req.body.workoutDone
    });
    res.status(201).send();
})

// DELETE stats
// router.delete('/:id', async (req, res) => {
//     const stats = await loadstatsCollection();
//     await stats.deleteOne({_id:new mongodb.ObjectID(req.params.id)});

//     res.status(200).send();
// });

async function loadStatsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@smartmirror-tsmi5.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    
    return client.db('vue_express').collection('stats');
}

module.exports = router;