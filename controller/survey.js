var express = require('express');
var router = express.Router();

router.get('/survey',function(req, res) {
    res.render('survey/main');
});

router.get('/survey/questions', function(req,res) {
    res.render('survey/questions');
});

router.get('/survey/results', function(req,res) {
    db.SubmitSurvey(function (err,result) {
        if(err) throw err;
        res.render('displaySurveyTable.ejs', {rs: result});
        }
    );
});

router.post('/survey/results', function (req, res) {
    db.PostTotal(function (err, result) {
            if (err) throw err;
            res.render('survey/results', {rs: result});
        }
    );
});

module.exports = router
