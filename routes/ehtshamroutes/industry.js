var express = require('express');
var router = express.Router();
const IndustryModel = require('../../models/ehtishammodels/Industry')

//add new interface design
router.post('/add', function (req, res, next) {
    IndustryModel.create(req.body)
        .then((result) => {
            console.log('artwork design has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all interface designs
router.get('/', function (req, res, next) {
    IndustryModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.get('/:id', function (req, res, next) {
    IndustryModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.delete('/:id', function (req, res, next) {
    IndustryModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.put('/:id', function (req, res, next) {
    IndustryModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "Designation": req.body.Designation,

        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;