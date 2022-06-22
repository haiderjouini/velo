var express = require('express');
var router = express.Router();

// Middleware
const authMiddle = require('../../middleware/auth.middleware');
const rolesMiddle = require('../../middleware/roles.middleware');
const {uploadUser} = require('../../middleware/upload.middleware');

const eventsController = require('../../controllers/events/events.controller');

router.use(express.json());
router.use(express.urlencoded({extended: false}));



// ***************** Api Register for user *****************
router.post('/add',(req, res) => {
  eventsController.add(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api update for user *****************
router.put('/update', (req, res) => {
  eventsController.update(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api delete for user *****************
router.delete('/delete', (req, res) => {
  eventsController.delete(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


// ***************** Api get   by id  *****************
router.get('/get/:id', (req, res) => {
  eventsController.get(req.params.id).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


// ***************** Api list users *****************
router.get('/list', (req, res) => {
  eventsController.getList().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

module.exports = router;
