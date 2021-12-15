import countries from "../constants/countryNamesToTwoLetterCountryCodes";
import threeLetterCodes from "../constants/threeLetterCountryCodesToTwoLetterCountryCodes";
import numbers from "../constants/numericCodesToTwoLetterCountryCodes";
import twoLetterCodes from "../constants/svgTwoLetterCountryCodes";

export const getTwoLetterCountryCodeByCountryName = (name: string) => {
  name = name.toLowerCase();
  let twoLetters = countries[name];
  if (twoLetters) return twoLetters;
  return null;
};

export const getTwoLetterCountryCodeByThreeLetterCountryCode = (
  code: string
) => {
  code = code.toLowerCase();
  let twoLetters = threeLetterCodes[code];
  if (twoLetters) return twoLetters;
  return null;
};

export const getTwoLetterCountryCodeByNumber = (num: string | number) => {
  if (typeof num === "number") num = num.toString();
  let twoLetters = numbers[num];
  if (twoLetters) return twoLetters;
  return null;
};

export const getTwoLetterCountryCode = (val: string | number) => {
  if (typeof val === "number") val = val.toString();
  val = val.toLowerCase();
  let obj;
  obj = twoLetterCodes[val];
  if (obj) obj = val;
  if (!obj) obj = getTwoLetterCountryCodeByThreeLetterCountryCode(val);
  if (!obj) obj = getTwoLetterCountryCodeByCountryName(val);
  if (!obj) obj = getTwoLetterCountryCodeByNumber(val);
  if (!obj) obj = null;
  return obj;
};
