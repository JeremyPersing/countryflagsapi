import express from "express";
import path from "path";
import responses from "../constants/responses";
import { getTwoLetterCountryCode } from "../services/flags";

const router = express.Router();

router.get("/svg/:code", async (req, res) => {
  try {
    if (req.params.code) {
      let countryCode = getTwoLetterCountryCode(req.params.code);
      if (countryCode) {
        return res.sendFile(
          path.join(__dirname, "../../public/flagssvg/" + countryCode + ".svg")
        );
      }
    }
    res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
  } catch (error) {
    res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
  }
});

router.get("/png/:code", async (req, res) => {
  try {
    if (req.params.code) {
      let countryCode = getTwoLetterCountryCode(req.params.code);
      if (countryCode) {
        return res.sendFile(
          path.join(__dirname, "../../public/flagspng/" + countryCode + ".png")
        );
      }
    }
    res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
  } catch (error) {
    res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
  }
});

export default router;
