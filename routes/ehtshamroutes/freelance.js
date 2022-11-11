var express = require('express');
var router = express.Router();
const FreelanceModel = require('../../models/ehtishammodels/Freelance')

//add new interface design
router.post('/add', function (req, res, next) {
    FreelanceModel.create(req.body)
        .then((result) => {
            console.log('graphic design has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all interface designs
router.get('/', function (req, res, next) {
    FreelanceModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});



//get single graphic
router.get('/:id', function (req, res, next) {
    FreelanceModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.delete('/:id', function (req, res, next) {
    FreelanceModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.put('/:id', function (req, res, next) {
    FreelanceModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "FreelanceCategory": req.body.FreelanceCategory
        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;