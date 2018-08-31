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
router.get("/:projectID", async (req, res) => {
  if (!Number(req.params.projectID)) {
    res.status(400).json({ errorMessage: "ID not a number" });
  }
  try {
    const results = await actionsHelper.get(req.params.projectID);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
