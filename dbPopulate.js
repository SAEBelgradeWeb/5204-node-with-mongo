function populateDatabase(callback) {
	const UsersCollection = db.collection('Users');

	UsersCollection.drop(function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log('Users collection dropped.');
	});

	UsersCollection.insertMany([
		{
			'firstName': 'Marko',
			'lastName': 'Mitranic',
			'username': 'marko.mitranic',
			'password': 'simpletextpassword',
			'avatar': 'myimage1.jpg',
			'group' : 'admin',
			'subscriptions': [1, 14, 32],
			'messages': [
				{
					'id': 12,
					'body': 'gubroufreogjrjeg',
					'to': 33
				}
			],
			'favorites': [13, 42, 65, 12]
		}, {
			'username': 'luka.savovic',
			'password': 'complextextpassword',
			'avatar': 'myimage.jpg',
			'group' : 'admin',
			'subscriptions': [1, 14, 32],
			'messages': [
				{
					'id': 12,
					'body': 'gubroufreogjrjeg',
					'to': 33
				}
			],
			'favorites': [13, 42, 65, 12]
		}, {
			'username': 'Lena',
			'password': '9876',
			'avatar': 'photo223.jpg',
			'group' : 'admin',
			'subscriptions': [1, 14, 32],
			'messages': [
				{
					'id': 12,
					'body': 'gubroufreogjrjeg',
					'to': 33
				}
			],
			'favorites': [13, 42, 65, 12]
		}, {
			'username': 'TheLegend27',
			'password': '1234',
			'avatar': 'myimage2.jpg',
			'group' : 'admin',
			'subscriptions': [1, 14, 32],
			'messages': [
				{
					'id': 12,
					'body': 'gubroufreogjrjeg',
					'to': 33
				}
			],
			'favorites': [13, 42, 65, 12]
		}
	], callback);
}