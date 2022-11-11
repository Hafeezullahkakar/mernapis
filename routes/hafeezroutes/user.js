var express = require('express');
var router = express.Router();
const UserModel = require('../../models/hafeezmodels/userModel')

//add new user
router.post('/add', function (req, res, next) {
    UserModel.create(req.body)
        .then((result) => {
            console.log('new user has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all users
router.get('/', function (req, res, next) {
    UserModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});



//get single user
router.get('/:id', function (req, res, next) {
    UserModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//delete user

router.delete('/:id', function (req, res, next) {
    UserModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//update user
router.put('/:id', function (req, res, next) {
    UserModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "name": req.body.name,
            'image': req.body.image
        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;