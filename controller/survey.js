var express = require('express');
var router = express.Router();

router.get('/main', function(req, res) {
    db.ResetSurvey(function (err,result) {
        if(err) throw err;
});

router.post('/main',function(req, res) {
    res.render('survey/main');
});

router.get('/questions', function(req,res) {
    res.render('survey/questions');
});

router.get('/results', function(req,res) {
    db.SubmitSurvey(function (err,result) {
        if(err) throw err;
        res.render('displaySurveyTable.ejs', {rs: result});
        }
    );
});

router.post('/results', function (req, res) {
    db.SurveyTotal(function (err, result) {
            if (err) throw err;
            res.render('survey/results', {rs: result});
        }
    );
});

module.exports = router;

