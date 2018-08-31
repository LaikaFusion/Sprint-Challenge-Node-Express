const express = require("express");
const projectsHelper = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await projectsHelper.get();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:projectID", async (req, res) => {
  if (!Number(req.params.projectID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
    return;
  }
  try {
    const results = await projectsHelper.get(req.params.projectID);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/actions/:projectID", async (req, res) => {
  if (!Number(req.params.projectID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
  }
  try {
    const results = await projectsHelper.getProjectActions(req.params.projectID);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete("/:actionID", async (req, res) => {
  if (!Number(req.params.actionID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
  }
  try {
    const results = await projectsHelper.remove(Number(req.params.actionID));
    if (results === 1) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ errorMessage: "Invalid ID for removal" });
    }
  } catch (err) {
    
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  
  if (
    !req.body.description ||
    !req.body.name
  ) {
    res.status(400).json({ errorMessage: "Invalid body" });
    return;
  }
  try {
    const results = await projectsHelper.insert(req.body);
    res.status(200).json({ results });
  } catch (err) {
    
    res.status(500).json(err);
  }
});

router.put("/:actionID", async (req, res) => {
  
  if (
    !req.body.description ||
    !req.body.name
  ) {
    res.status(400).json({ errorMessage: "Invalid body" });
    return;
  }
  if (!Number(req.params.actionID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
    return;
  }
  try {
    const results = await projectsHelper.update(req.params.actionID,req.body);
    res.status(200).json({ results });
  } catch (err) {
    
    res.status(500).json(err);
  }
});

module.exports = router;
