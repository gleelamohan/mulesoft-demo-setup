const express = require("express");
var app = express();
const path = require("path");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.get("/:id", function (req, res) {
	var Id = req.params.id;
	console.log(Id);
	res.setHeader("Content-Type", "application/json");
	res.send(
		JSON.stringify({
			type: "siren",
			siren: "428116065",
			deno: "SOCIETE",
			greffe: "Paris B 428116065",
			enseigne: "SOCIETE",
			psiret: "42811606500049",
			adresse: "5 RUE DE LA TERRASSE",
			codepostal: "75017",
			normcommune: "PARIS",
			commune: "PARIS",
			ape: "6312Z",
			apetexte: "Portails Internet",
			dateimma: "26-11-1999",
			dcren: "01-11-1999",
			nationalite: "France",
			formejur: "Société par actions simplifiée",
			capital: {
				devisecap: "EURO",
				typecap: "social",
				capital: "76000.00",
			},
		})
	);
});

app.get("/", function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(
		JSON.stringify({
			type: "siren",
			siren: "428116065",
			deno: "SOCIETE",
			greffe: "Paris B 428116065",
			enseigne: "SOCIETE",
			psiret: "42811606500049",
			adresse: "5 RUE DE LA TERRASSE",
			codepostal: "75017",
			normcommune: "PARIS",
			commune: "PARIS",
			ape: "6312Z",
			apetexte: "Portails Internet",
			dateimma: "26-11-1999",
			dcren: "01-11-1999",
			nationalite: "France",
			formejur: "Société par actions simplifiée",
			capital: {
				devisecap: "EURO",
				typecap: "social",
				capital: "76000.00",
			},
		})
	);
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function () {
	console.log(`Listening on ${PORT}`);
});
