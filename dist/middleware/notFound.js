"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.use((req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public/html/404-route-not-found.html"));
});
exports.default = router;
