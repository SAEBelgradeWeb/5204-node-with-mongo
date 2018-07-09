let UsersCollection = {};
const database = require('../Db').then(function(db) {
	UsersCollection = db.collection('Users');
});

exports.getUsers = function (args, callback) {
	UsersCollection.find(args).toArray(callback);
}

exports.getUser = function (args, callback) {
	UsersCollection.findOne(args, callback);
}

exports.insertUser = function (user, callback) {
	UsersCollection.insertOne(user, callback);
}

exports.deleteUser = function (query, callback) {
	UsersCollection.deleteOne(query, callback);
}
