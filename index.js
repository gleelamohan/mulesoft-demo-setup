const express = require("express");
var app = express();
const path = require("path");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
	user: process.env.User,
	host: process.env.Host,
	database: process.env.Database,
	password: process.env.Password,
	port: process.env.PORT,
});

var router = express.Router();

router.use(function (req, res, next) {
	console.log("/" + req.method);
	next();
});
const Path = __dirname + "/views/";

app.get("/", function (req, res) {
	res.sendFile(Path + "index.html");
});

app.get("/configure", function (req, res) {
	pool.connect();

	const query = `
				CREATE TABLE users (
						email varchar,
						firstName varchar,
						lastName varchar,
						age int
				);
`;

	pool.query(query, (err, res) => {
		const query1 = `
		SELECT *
		FROM users
		`;

		client.query(query1, (err, res) => {
			if (err) {
				console.error(err);
				return;
			}

			for (let row of res.rows) {
				console.log(row);
			}
			return res.rows;
		});
	});
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);
app.use("*", function (req, res) {
	res.sendFile(path + "404.html");
});

app.listen(PORT, function () {
	console.log(`Listening on ${PORT}`);
});

/*
express()
	.use(express.static(path.join(__dirname, "public")))
	.set("views", path.join(__dirname, "views"))
	.set("view engine", "ejs")
	.get("/", (req, res) => res.render("pages/index"))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));
	*/
