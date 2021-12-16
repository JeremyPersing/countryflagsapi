import names from "../constants/countryNamesToTwoLetterCountryCodes";
import numbers from "../constants/numericCodesToTwoLetterCountryCodes";
import svgs from "../constants/svgTwoLetterCountryCodes";
import threeLetterCodes from "../constants/threeLetterCountryCodesToTwoLetterCountryCodes";
import fs from "fs";

export const createAllCountriesFile = () => {
  // us: "united states"
  let objOne: any = {};
  // names
  for (const [key, value] of Object.entries(names)) {
    if (!objOne[value]) {
      objOne[value] = [key];
    } else {
      let arr = objOne[value];
      arr.push(key);
      objOne[value] = arr;
    }
  }

  // us: "001"
  let objTwo: any = {};
  // numbers
  for (const [key, value] of Object.entries(numbers)) {
    objTwo[value] = key;
  }

  // "us": USA
  let objThree: any = {};
  // 3code
  for (const [key, value] of Object.entries(threeLetterCodes)) {
    objThree[value] = key;
  }

  let realObj: any = {};
  // This is the 2 code
  for (const [key, value] of Object.entries(svgs)) {
    let name, number, threeLetterCode;
    let twoLetterCode = key.toUpperCase();
    if (objOne[key]) {
      let arr = objOne[key];
      let finalArr = [];
      for (let i in arr) {
        const finalName = arr[i].replace(
          /(^\w{1})|(\s+\w{1})/g,
          (letter: any) => letter.toUpperCase()
        );
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
  fs.writeFileSync("countries.json", data);
};
