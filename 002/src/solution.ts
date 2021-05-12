/// <reference path="./types.ts" />
import { getComposition } from "./getComposition";
import path from "path";
import fs from "fs";
import { table } from "table";

const INPUT = path.join(__dirname, "../formulas.txt");
const OUTPUT = path.join(__dirname, "../output.txt");

// clear the output file
fs.writeFileSync(OUTPUT, "", "utf-8");

const formulas = fs
  .readFileSync(INPUT, "utf-8")
  .split("\n")
  .filter((l) => !!l);

formulas.forEach((formula: string): void => {
  const composition: Composition[] = getComposition(formula);

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
  fs.appendFileSync(OUTPUT, table(tableFriendlyComposition, config), "utf-8");
});

// write solutions to files
