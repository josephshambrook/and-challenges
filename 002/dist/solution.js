"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./types.ts" />
const getComposition_1 = require("./getComposition");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const table_1 = require("table");
const INPUT = path_1.default.join(__dirname, "../formulas.txt");
const OUTPUT = path_1.default.join(__dirname, "../output.txt");
// clear the output file
fs_1.default.writeFileSync(OUTPUT, "", "utf-8");
const formulas = fs_1.default
    .readFileSync(INPUT, "utf-8")
    .split("\n")
    .filter((l) => !!l);
formulas.forEach((formula) => {
    const composition = getComposition_1.getComposition(formula);
    const tableFriendlyComposition = composition.map((c) => {
        const { symbol, name, count } = c;
        return [symbol, name, count];
    });
    const config = {
        columnDefault: {
            width: 10,
        },
        header: {
            content: `Composition of\n${formula}`,
        },
        columns: {
            0: {
                width: 3,
            },
            1: {
                width: 15,
            },
            2: {
                width: 3,
            },
        },
    };
    // write to output file
    fs_1.default.appendFileSync(OUTPUT, table_1.table(tableFriendlyComposition, config), "utf-8");
});
// write solutions to files
