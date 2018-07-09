const Repository = require('../Repositories/UsersRepository');

exports.Index = function (request, response) {
	Repository.getUsers({}, function(err, results) {
		if (err) throw err;

		responseResults = [];
		results.forEach((user, key) => {
			responseResults.push({
				id: user._id,
				displayName: user.firstName + '' + user.lastName,
				username: user.username,
				avatar: user.avatar
			});
		});

		response.send(responseResults);
	});
}

exports.Insert = function (request, response) {

	let newUser = {
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		username: request.body.username,
		password: request.body.password,
		group: request.body.group,
		friends: [
			new mongo.ObjectID('5b430cdaedb703d53450d97c'),
			new mongo.ObjectID('5b430cdaedb703d53450d97c'),
			new mongo.ObjectID('5b430cdaedb703d53450d97c')
		]
	};

	if (!newUser.username || !newUser.username.length) {
		response.status(400).send({
			'status': 400,
			'message': 'A new user must provide a username!'
		});
		return;
	}

	if (!newUser.password || !newUser.password.length) {
		response.status(400).send({
			'status': 400,
			'message': 'A new user must provide a password!'
		});
		return;
	}

	Repository.insertUser(newUser, function(err, results) {

		Repository.getUser(
			{'username': newUser.username},
			function(err, results) {
				response.send(results);
			});
	});
}

exports.Show = function (request, response) {
	Repository.getUsers(
		{'_id': new mongo.ObjectID(request.params.id)},
		function(err, results) {
			if (err) throw err;
			response.send(results);
		}
	);
}

exports.Delete = function (request, response) {
	Repository.deleteUser(
		{'_id': new mongo.ObjectID(request.params.id)},
		function(err, results) {
		if (err) throw err;
		response.send(results);
	});
}