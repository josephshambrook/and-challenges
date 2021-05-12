"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComposition = void 0;
/// <reference path="./types.ts" />
const elements_1 = require("./elements");
const REGEX_PARANTHESIS = /(\(+[A-Za-z]+\)+[0-9]{1,})/g;
const REGEX_REPEATER = /([A-Z]([a-z])?[0-9]{1})/g;
const REGEX_VALID_SYMBOLS = /(A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[dgnot]|N[abdeiop]?|Os?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilm]|U(u[opst])?|V|W|Xe|Yb?|Z[nr])/g;
// wasted a fair bit of time trying to do this in a loop!
// so resorted to manual
const replaceAllSubscript = (formula) => formula
    .replace(/\u2080/gu, "0")
    .replace(/\u2081/gu, "1")
    .replace(/\u2082/gu, "2")
    .replace(/\u2083/gu, "3")
    .replace(/\u2084/gu, "4")
    .replace(/\u2085/gu, "5")
    .replace(/\u2086/gu, "6")
    .replace(/\u2087/gu, "7")
    .replace(/\u2088/gu, "8")
    .replace(/\u2089/gu, "9");
const repeatFormula = (formula, multiplier) => {
    // repeat the formula the number of times in the multiplier
    let repeated = "";
    let count = multiplier;
    while (count) {
        repeated += formula;
        count--;
    }
    return repeated;
};
const unpack = (formula) => {
    // find any formulas wrapped in paranthesis, on the inner level
    const splitFormula = formula.split(REGEX_PARANTHESIS);
    if (splitFormula.length === 1) {
        // no paranthesis found, so look for other formulas to repeat
        return formula.replace(REGEX_REPEATER, (match) => {
            const f = match.split(/\d/)[0];
            const m = Number(match.split(/(\d)/)[1]);
            const r = repeatFormula(f, m);
            return r;
        });
    }
    // remove paranthesis
    const extractedFormula = splitFormula[1].replace("(", "").split(")")[0];
    // find how many times the formula should be repeated
    const multiplier = Number(splitFormula[1].split(")")[1]);
    // reinsert into unpackedFormula
    splitFormula[1] = repeatFormula(extractedFormula, multiplier);
    // recursively run this function with result
    return unpack(splitFormula.join(""));
};
const breakdown = (longFormula) => {
    const validSymbols = longFormula.match(REGEX_VALID_SYMBOLS);
    if (validSymbols === null)
        return null;
    const counts = validSymbols.reduce((acc, v) => (Object.assign(Object.assign({}, acc), { [v]: (acc[v] || 0) + 1 })), {});
    // create completed object
    return Object.keys(counts).map((key) => {
        const element = elements_1.elements.find((el) => el.symbol === key);
        return {
            symbol: key,
            name: (element && element.name) || "",
            count: counts[key],
        };
    });
};
const getComposition = (formula) => {
    const parsedFormula = replaceAllSubscript(formula);
    const unpackedFormula = unpack(parsedFormula);
    return breakdown(unpackedFormula);
};
exports.getComposition = getComposition;
