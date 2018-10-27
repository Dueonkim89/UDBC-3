const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
