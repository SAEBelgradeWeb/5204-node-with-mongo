const express = require('express');
const app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'nobleants';
let db;

MongoClient.connect(url, function(err, client) {
	if (err) throw err;
	db = client.db(dbName);
})


app.get('/', (request, response) => {
	response.send('Hello World!');
});


app.get('/users', (request, response) => {
	getUsers({}, function(err, results) {
		if (err) throw err;
		response.send(results);
	});
});

app.get('/users/:id', (request, response) => {
	getUsers(
		{'_id': new mongo.ObjectID(request.params.id)},

		function(err, results) {
			if (err) throw err;
			response.send(results);
		}
	);
});

app.post('/insert', (request, response) => {
	insertDocuments(function(err, result) {
		response.send(result);
	});
});

app.listen('3000', () => console.log('listening at port 3000'));

function getUsers(args, callback) {
	const UsersCollection = db.collection('Users');
	UsersCollection.find(args).toArray(callback);
}

function insertDocuments(callback) {
	const UsersCollection = db.collection('Users');

	UsersCollection.insertOne({
		'username': 'TheLegend27',
		'password': '1234',
		'avatar': 'myimage2.jpg'
	}, callback);
}

function populateDatabase(callback) {
	const UsersCollection = db.collection('Users');

	UsersCollection.drop(function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log('Users collection dropped.');
	});

	UsersCollection.insertMany([
		{
			'username': 'marko.mitranic',
			'password': 'simpletextpassword',
			'avatar': 'myimage1.jpg'
		}, {
			'username': 'luka.savovic',
			'password': 'complextextpassword',
			'avatar': 'myimage.jpg'
		}, {
			'username': 'Lena',
			'password': '9876',
			'avatar': 'photo223.jpg'
		}, {
			'username': 'TheLegend27',
			'password': '1234',
			'avatar': 'myimage2.jpg'
		}
	], callback);
}