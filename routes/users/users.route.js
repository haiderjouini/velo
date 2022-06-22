var express = require('express');
var router = express.Router();

const authMiddle = require('../../middleware/auth.middleware');
const rolesMiddle = require('../../middleware/roles.middleware');
const {uploadUser} = require('../../middleware/upload.middleware');
const userModel = require('../../models/users/user.model')
const userController = require('../../controllers/users/user.controller');

router.use(express.json());
router.use(express.urlencoded({extended: false}));



// ***************** Api Register for user *****************
router.post('/add',[uploadUser.single('image')] ,(req, res) => {
  userController.add(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api update for user *****************
router.put('/update',authMiddle, (req, res) => {
  userController.update(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api delete for user *****************
router.delete('/delete',authMiddle, (req, res) => {
  userController.delete(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api auth for user *****************
router.post('/auth', (req, res) => {
  userController.auth(req.body).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api list users *****************
router.get('/list', (req, res) => {
  userController.getListUsers().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api get information user by id  *****************
router.get('/getUser/:id',[authMiddle], (req, res) => {
  userController.getUser(req.params.id).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


module.exports = router;
