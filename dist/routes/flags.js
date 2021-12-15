"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const flags_1 = require("../services/flags");
const router = express_1.default.Router();
router.get("/svg/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.code) {
            let countryCode = (0, flags_1.getTwoLetterCountryCode)(req.params.code);
            if (countryCode) {
                return res.sendFile(path_1.default.join(__dirname, "../../public/flagssvg/" + countryCode + ".svg"));
            }
        }
        res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
    }
    catch (error) {
        res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
    }
}));
router.get("/png/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.code) {
            let countryCode = (0, flags_1.getTwoLetterCountryCode)(req.params.code);
            if (countryCode) {
                return res.sendFile(path_1.default.join(__dirname, "../../public/flagspng/" + countryCode + ".png"));
            }
        }
        res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
    }
    catch (error) {
        res.sendFile(__dirname, "../../public/html/404-flag-not-found.html");
    }
}));
exports.default = router;
