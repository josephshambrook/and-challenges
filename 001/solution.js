const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .filter((l) => !!l)
  .map((l) => JSON.parse(l));
console.log(
  new Set(
    input
      .map((n) =>
        Array(n[1] - n[0])
          .fill(null)
          .map((_, i) => i + (n[0] + 1))
      )
      .flat()
  ).size
);
