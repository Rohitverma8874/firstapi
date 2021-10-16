const router = require('express').Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    const data = req.body;

    new Model(data).save()
        .then((data) => {
            console.log('user data saved');
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
            console.log('user data fetched');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get( '/getbyemail/:useremail', ( req, res ) => {

    Model.findOne({ email : req.params.useremail })
    .then((data) => {
            console.log('user data fetched by email');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
} )

module.exports = router;