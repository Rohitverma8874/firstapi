const router = require('express').Router();
const Model = require('../models/videoModel');

router.post('/add', (req, res) => {

    const data = req.body;

    new Model(data).save()
        .then((data) => {
            console.log('video data saved');
            res.status(200).json({ message: 'success', data: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })

})

router.get('/getall', (req, res) => {

    Model.find({})
        .then((data) => {
            console.log('video data fetched');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;