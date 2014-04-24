var mysql = require('mysql');

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'marjohnson',
        password : '3587914'
    });

// Database setup                                                                                                            

connection.query('CREATE DATABASE IF NOT EXISTS marjohnson', function (err) {
    if (err) throw err;
    connection.query('USE marjohnson', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS Users('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'name VARCHAR(30)'
            + 'email VARCHAR(50)'
            +  ')', function (err) {
                if (err) throw err;
            });
    });
});

// Create tables for other programs                                                                                          

connection.query('CREATE TABLE IF NOT EXISTS Survey('
                 + 'name VARCHAR(30),'
                 + 'gender VARCHAR(10),'
                 + 'transport VARCHAR(30),'
                 + ')'
                 );

// Create query functions to be used by other programs                                                                       

// Programs for the user table                                                                                               

exports.AddUser = function(callback) {
    connection.query('INSERT INTO Users SET ?',
        function (err, result) {
            if (err) {
                      console.log(err);
                      callback(true);
                      return;
                     }
                     callback(false, result);
                     }
                    );
    }


exports.GetAll = function(callback) {
    connection.query('SELECT name, email FROM Users',
                     function (err, result) {
                         if (err) {
                             console.log(err);
                             callback(true);
                             return;
                         }
                         callback(false, result);
                     }
                    );
    }

// Programs for the survey table                                                                                             

exports.SubmitSurvey = function(callback) {
    connection.query('INSERT INTO Survey SET ?',
                     function (err, result) {
                         if (err) {
                             console.log(err);
                             callback(true);
                             return;
                         }
                         callback(false, result);
                     }
                    );
    }

exports.SurveyTotal = function(callback) {
    connection.query('SELECT * FROM Survey',
                     function (err, result) {
                         if (err) {
                             console.log(err);
                             callback(true);
                             return;
                         }
                         callback(false, result);
                     }
                    );
    }

exports.ResetSurvey = function(callback) {
    connection.query('DELETE * FROM Survey',
                     function (err, result) {
                         if (err) {
                             console.log(err);
                             callback(true);
                             return;
                         }
                         callback(false, result);
                     }
                    );
    }
