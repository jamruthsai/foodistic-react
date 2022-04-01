// helpers
import _trim from "lodash/trim";
import _lowerCase from "lodash/lowerCase";
import _replace from "lodash/replace";

//constants
import { CURRENCYNAMETOSYMBOL } from "../constants/currency";
import { ICON_ROOT_DIR } from "../constants/directoryEndPoint";

export const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((args, f) => {
      return f(args);
    }, ...args);

export const getIcon = (key) => {
  return `${ICON_ROOT_DIR}/${key}.svg`;
};

export const getCurrencySymbol = (currencyName) => {
  return CURRENCYNAMETOSYMBOL[currencyName];
};

const removeWhiteSpaces = (text) => _replace(text, /\s+/g, "");

export const generateUrl = compose(removeWhiteSpaces, _lowerCase, _trim);
