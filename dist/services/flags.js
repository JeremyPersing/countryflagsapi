"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwoLetterCountryCode = exports.getTwoLetterCountryCodeByNumber = exports.getTwoLetterCountryCodeByThreeLetterCountryCode = exports.getTwoLetterCountryCodeByCountryName = void 0;
const countryNamesToTwoLetterCountryCodes_1 = __importDefault(require("../constants/countryNamesToTwoLetterCountryCodes"));
const threeLetterCountryCodesToTwoLetterCountryCodes_1 = __importDefault(require("../constants/threeLetterCountryCodesToTwoLetterCountryCodes"));
const numericCodesToTwoLetterCountryCodes_1 = __importDefault(require("../constants/numericCodesToTwoLetterCountryCodes"));
const svgTwoLetterCountryCodes_1 = __importDefault(require("../constants/svgTwoLetterCountryCodes"));
const getTwoLetterCountryCodeByCountryName = (name) => {
    name = name.toLowerCase();
    let twoLetters = countryNamesToTwoLetterCountryCodes_1.default[name];
    if (twoLetters)
        return twoLetters;
    return null;
};
exports.getTwoLetterCountryCodeByCountryName = getTwoLetterCountryCodeByCountryName;
const getTwoLetterCountryCodeByThreeLetterCountryCode = (code) => {
    code = code.toLowerCase();
    let twoLetters = threeLetterCountryCodesToTwoLetterCountryCodes_1.default[code];
    if (twoLetters)
        return twoLetters;
    return null;
};
exports.getTwoLetterCountryCodeByThreeLetterCountryCode = getTwoLetterCountryCodeByThreeLetterCountryCode;
const getTwoLetterCountryCodeByNumber = (num) => {
    if (typeof num === "number")
        num = num.toString();
    let twoLetters = numericCodesToTwoLetterCountryCodes_1.default[num];
    if (twoLetters)
        return twoLetters;
    return null;
};
exports.getTwoLetterCountryCodeByNumber = getTwoLetterCountryCodeByNumber;
const getTwoLetterCountryCode = (val) => {
    if (typeof val === "number")
        val = val.toString();
    val = val.toLowerCase();
    let obj;
    obj = svgTwoLetterCountryCodes_1.default[val];
    if (obj)
        obj = val;
    if (!obj)
        obj = (0, exports.getTwoLetterCountryCodeByThreeLetterCountryCode)(val);
    if (!obj)
        obj = (0, exports.getTwoLetterCountryCodeByCountryName)(val);
    if (!obj)
        obj = (0, exports.getTwoLetterCountryCodeByNumber)(val);
    if (!obj)
        obj = null;
    return obj;
};
exports.getTwoLetterCountryCode = getTwoLetterCountryCode;
