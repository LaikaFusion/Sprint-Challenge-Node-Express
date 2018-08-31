const express = require("express");
const actionsRouter = require("./routes/actions");
const projects = require("./routes/projects");
const server = express();

server.use(express.json());

server.use("/actions", actionsRouter);



server.use("/", (req, res) =>
  res
    .status(404)
    .json({ errorMessage: "You probably want to use a different endpoint" })
);


server.listen(9001, () => console.log("API running on port 9001"));
