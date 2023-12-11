# String Manipulation Functions

A Node.js module providing various string manipulation functions to handle capitalization and text formatting.

## Installation

Install the package via npm:

```bash
npm install string-case --save
```

## Usage

```javascript
const {
  capitalize,
  initCap,
  capitalizeAndLowerCaseAllTheOthers,
  initCapAndLowerCaseAllTheOthers,
} = require("string-case");

// Capitalize the first letter of a string
const capitalizedString = capitalize("hello"); // Output: 'Hello'

// Capitalize the first letter of each word in a string
const initCapitalizedString = initCap("hello world"); // Output: 'Hello World'

// Capitalize the first letter and lowercase the rest of the string
const modifiedString = capitalizeAndLowerCaseAllTheOthers("HeLlO"); // Output: 'Hello'

// Capitalize the first letter of each word and lowercase the rest of the string
const modifiedString = initCapAndLowerCaseAllTheOthers("HeLlO woRlD"); // Output: 'Hello World'

```
These functions provide various ways to manipulate strings, allowing for capitalization, initial capitalization of words, and specific casing of text based on your requirements.

Feel free to integrate these functions into your Node.js projects to handle string manipulations efficiently.
