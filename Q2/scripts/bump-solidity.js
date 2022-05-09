const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/;
const verifierRegex = /contract Verifier/;

for (c of ["HelloWorld", "Multiplier3"]) {
  let content = fs.readFileSync(`./contracts/${c}Verifier.sol`, {
    encoding: "utf-8",
  });
  let bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
  bumped = bumped.replace(verifierRegex, `contract ${c}Verifier`);

  fs.writeFileSync(`./contracts/${c}Verifier.sol`, bumped);
}
