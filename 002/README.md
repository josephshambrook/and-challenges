# :trophy: Challenge 2 - “Up and Atom!” (Intermediate) :test_tube:

## Problem:

A chemical formula is a way of presenting information about the proportions of atoms that make up a compound. They're written as a sequence of elements followed by numbers denoting the amount of atoms of each element. Elements are represented as an uppercase letter, sometimes followed by a lowercase letter (for example: `Fe` and `C`). Your task is to write a tool capable of determining how many atoms of each element are present in a given formula. Chemical formulae can be fairly complicated, but your tool should at least support the use of parentheses to group together elements - remember to multiply the elements inside the parentheses by the number which follows them.

- :five: Points are awarded for submitting a working solution which can parse this set of sample formulae
- :three: Further points are awarded for a solution capable of parsing `Co₃(Fe(CN)₆)₂`
- :two: Further points are awarded for a solution which can present its results using the proper names of the elements (e.g. `Fe` as `Iron`)

## Example:

For the following chemical formula:

```
CH₂(OH)₂
```

The expected output would be something like:

```
C: 1
H: 4
O: 2
```

## Solution

I've written my solution with TypeScript - which I'm still learning, so may be quite basic, and compiler options aren't perfect.

Formulas to be parsed are written in `formulas.txt`, separated by new lines. Formulas can either contain the multiples as subscript (i.e. ₂) or normal numbers. When the solution code is run, the output is written in pretty tables to `output.txt`.

### Instructions to run

1. Clone the repo and `cd` to this folder
2. Run `npm i` (make sure you have Node installed)
3. Edit `formulas.txt` to contain whatever formulas you would like to parse
4. Run `npm build` to parse the formulas, or `npm run watch` to build whenever a file changes
