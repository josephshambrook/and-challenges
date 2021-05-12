import { getComposition } from "./getComposition";

const log = (formula: string) => {
  console.log(`Composition of ${formula} is:`);
  console.table(getComposition(formula));
  console.log("");
};

log("CH₂");
log("CH₂(OH)₂");
log("Co₃(Fe(CN)₆)₂");
