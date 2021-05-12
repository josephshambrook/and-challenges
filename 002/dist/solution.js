"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getComposition_1 = require("./getComposition");
const log = (formula) => {
    console.log(`Composition of ${formula} is:`);
    console.table(getComposition_1.getComposition(formula));
    console.log("");
};
log("CH₂");
log("CH₂(OH)₂");
log("Co₃(Fe(CN)₆)₂");
