import express from "express";
import path from "path";

const router = express.Router();

router.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "../../public/html/404-route-not-found.html")
  );
});

export default router;
