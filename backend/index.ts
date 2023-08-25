const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Mongose = require("mongoose");
const compression = require('compression')

// Express APIs
const api = require("./routes/auth.routes");

// Connecting MongoDB
async function mongoDbConnection() {
  await Mongose.connect(
    "mongodb+srv://vasco:123@cluster0.ydcyvwz.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    6000
  );
}
mongoDbConnection().then(() => {
  console.log("MongoDB successfully connected.");
}),(err: any) => {
    console.log("Could not connected to database : " + err);
  };

// Express settings
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Serve static resources
app.use("/api", api);
app.use(compression())

// Define PORT
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Express error handling
app.use((req: any, res:any, next: any) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err:any, req:any, res:any, next:any) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
