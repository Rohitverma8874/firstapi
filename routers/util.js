const router = require('express').Router();
const multer = require('multer');

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const uploader = multer({ storage: myStorage });

router.post('/uploadfile', uploader.single('file'), (req, res) => {
    console.log('file uploading ...');

    res.json({ message: 'file upload success' });
})



module.exports = router;