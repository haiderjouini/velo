var express = require('express');
var router = express.Router();

// Middleware
const authMiddle = require('../../middleware/auth.middleware');
const rolesMiddle = require('../../middleware/roles.middleware');
const {uploadUser} = require('../../middleware/upload.middleware');

const publicationController = require('../../controllers/forum/publication.controller');

router.use(express.json());
router.use(express.urlencoded({extended: false}));



// ***************** Api Register for user *****************
router.post('/add',(req, res) => {
  publicationController.add(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api update for user *****************
router.put('/update/:id', (req, res) => {
  publicationController.update(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api delete for user *****************
router.delete('/delete/:id', (req, res) => {
  publicationController.delete(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


// ***************** Api get   by id  *****************
router.get('/get/:id', (req, res) => {
  publicationController.get(req.params.id).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


// ***************** Api list users *****************
router.get('/list', (req, res) => {
  publicationController.getList().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

module.exports = router;
