const express = require("express");
const actionsHelper = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await actionsHelper.get();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:actionID", async (req, res) => {
  if (!Number(req.params.actionID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
  }
  try {
    const results = await actionsHelper.get(req.params.actionID);
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
    const results = await actionsHelper.remove(Number(req.params.actionID));
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
    !req.body.project_id ||
    !req.body.description ||
    !req.body.notes
  ) {
    res.status(400).json({ errorMessage: "Invalid body" });
  }
  try {
    const results = await actionsHelper.insert(req.body);
    res.status(200).json({ results });
  } catch (err) {
    
    res.status(500).json(err);
  }
});

router.put("/:actionID", async (req, res) => {
  
  if (
    !req.body.project_id ||
    !req.body.description ||
    !req.body.notes
  ) {
    res.status(400).json({ errorMessage: "Invalid body" });
    return;
  }
  if (!Number(req.params.actionID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
    return;
  }
  try {
    const results = await actionsHelper.update(req.params.actionID,req.body);
    res.status(200).json({ results });
  } catch (err) {
    
    res.status(500).json(err);
  }
});

module.exports = router;
