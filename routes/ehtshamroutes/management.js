var express = require('express');
var router = express.Router();
const ManagementModel = require('../../models/ehtishammodels/Management')

//add new theses paper 
router.post('/add', function (req, res, next) {
    ManagementModel.create(req.body)
        .then((result) => {
            console.log('publication has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//get all theses papers
router.get('/', function (req, res, next) {
    ManagementModel.find({}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//get single theses
router.get('/:id', function (req, res, next) {
    ManagementModel.find({ _id: req.params.id }).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//delete specific theses
router.delete('/:id', function (req, res, next) {
    ManagementModel.deleteOne({ _id: req.params.id }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

//update specific theses
router.put('/:id', function (req, res, next) {
    ThesesModel.findOneAndUpdate({ _id: req.params.id }, {
        "$set": {
            "Desigination": req.body.Desigination
        }
    }, { new: true, upsert: false }, function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


module.exports = router;