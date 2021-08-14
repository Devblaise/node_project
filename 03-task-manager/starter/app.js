const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
	res.send("welcome to task manager project");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`app is listening on port ${port}...`);
		});
	} catch (err) {
		console.log(err.message);
	}
};

start();
