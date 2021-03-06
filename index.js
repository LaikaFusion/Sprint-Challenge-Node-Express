const express = require("express");
const actionsRouter = require("./routes/actions");
const projectsRouter = require("./routes/projects");
const cors = require('cors')

const server = express();

//middleware
server.use(express.json());
server.use(cors())

//routes
server.use("/actions", actionsRouter);
server.use("/projects", projectsRouter);
server.use("/", (req, res) =>
  res
    .status(404)
    .json({ errorMessage: "You probably want to use a different endpoint" })
);


server.listen(9001, () => console.log("API running on port 9001"));
