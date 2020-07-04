var mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3333);

var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

exports.addTask = function ( title, priority ) {
    
    return;
};

exports.deleteTask = function ( taskID ) {
    return;
}

exports.moveTask = function ( newPriority ) {
    return;
}