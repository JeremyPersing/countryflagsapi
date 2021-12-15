"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAllCountriesFile = void 0;
const countryNamesToTwoLetterCountryCodes_1 = __importDefault(require("../constants/countryNamesToTwoLetterCountryCodes"));
const numericCodesToTwoLetterCountryCodes_1 = __importDefault(require("../constants/numericCodesToTwoLetterCountryCodes"));
const svgTwoLetterCountryCodes_1 = __importDefault(require("../constants/svgTwoLetterCountryCodes"));
const threeLetterCountryCodesToTwoLetterCountryCodes_1 = __importDefault(require("../constants/threeLetterCountryCodesToTwoLetterCountryCodes"));
const fs_1 = __importDefault(require("fs"));
const createAllCountriesFile = () => {
    // us: "united states"
    let objOne = {};
    // names
    for (const [key, value] of Object.entries(countryNamesToTwoLetterCountryCodes_1.default)) {
        if (!objOne[value]) {
            objOne[value] = [key];
        }
        else {
            let arr = objOne[value];
            arr.push(key);
            objOne[value] = arr;
        }
        // console.log(`${key}: ${value}`);
    }
    // us: "001"
    let objTwo = {};
    // numbers
    for (const [key, value] of Object.entries(numericCodesToTwoLetterCountryCodes_1.default)) {
        objTwo[value] = key;
        // console.log(`${key}: ${value}`);
    }
    // "us": USA
    let objThree = {};
    // 3code
    for (const [key, value] of Object.entries(threeLetterCountryCodesToTwoLetterCountryCodes_1.default)) {
        objThree[value] = key;
        // console.log(`${key}: ${value}`);
    }
    let realObj = {};
    // This is the 2 code
    for (const [key, value] of Object.entries(svgTwoLetterCountryCodes_1.default)) {
        let name, number, threeLetterCode;
        let twoLetterCode = key.toUpperCase();
        if (objOne[key]) {
            let arr = objOne[key];
            let finalArr = [];
            for (let i in arr) {
                const finalName = arr[i].replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
                finalArr.push(finalName);
            }
            name = finalArr;
        }
        if (objTwo[key]) {
            number = objTwo[key];
        }
        if (objThree[key]) {
            threeLetterCode = objThree[key].toUpperCase();
        }
        realObj[key] = {
            name,
            number,
            threeLetterCode,
            twoLetterCode,
        };
    }
    let data = JSON.stringify(realObj);
    fs_1.default.writeFileSync("countries.json", data);
};
exports.createAllCountriesFile = createAllCountriesFile;
