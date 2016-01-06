/**
 * This file defines the routes used in your application
 * It requires the database module that we wrote previously.
 */ 

 var db = require('./database'),
 		photos = db.photos,
 		users = db.users;

 module.exports = function(app){
 	//Homepage
 	app.get('/',function(req,res){

 	});	
 }