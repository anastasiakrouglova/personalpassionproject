const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET WORKOUTS
router.get('/', async (req, res) => {
    const workouts = await loadWorkoutsCollection();
    res.send(await workouts.find({}).toArray());
});

// ADD WORKOUTS
router.post('/', async (req, res) => {
    const workouts = await loadWorkoutsCollection();
    await workouts.insertOne({
        id: req.body.id,
        title: req.body.title,
        type: req.body.type,
        time: req.body.time,
        img: req.body.img,
        level: req.body.level
    });
    res.status(201).send();
})

// DELETE WORKOUTS
router.delete('/:id', async (req, res) => {
    const workouts = await loadWorkoutsCollection();
    await workouts.deleteOne({_id:new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
});

async function loadWorkoutsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@smartmirror-tsmi5.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    
    return client.db('vue_express').collection('workouts');
}

module.exports = router;