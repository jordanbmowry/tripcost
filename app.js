const express = require('express');
const mongo = require('mongodb').MongoClient;

const app = express();
app.use(express.json());

const url = 'mongodb://localhost:27017';

let db;

mongo.connect(
	url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err, client) => {
		if (err) {
			console.error(err);
			return;
		}
		db = client.db('tripcost');
		trips = db.collection('trips');
		expenses = db.collection('expenses');
	}
);

app.post('/trip', (req, res) => {
	const name = req.body.name;
	trips.insertOne({ name: name }, (err, result) => {});
});

app.get('/trips', (req, res) => {
	/* */
});

app.post('/expense', (req, res) => {
	/* */
});

app.get('/expenses', (req, res) => {
	/* */
});

app.listen(3000, (req, res) => {
	console.log('Server ready');
});
