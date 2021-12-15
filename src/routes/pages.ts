import express from "express";
import path from "path";

const router = express.Router();

router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

export default router;
