# string-case

1. capitalize - It returns the first letter to uppercase

    'heLlo world' => HeLlo world


2. capitalizeAndLowerCaseAllTheOthers - It returns the first letter to uppercase and all other words in the string will be converted to lowercase.

    'heLlo world' => Hello world


3. initCap - It returns a character string with the first letter of each word converted to uppercase.

    'heLlo World' => HeLlo World


4. initCapAndLowerCaseAllTheOthers - It returns a character string with the first letter of each word converted to uppercase. All other letters in the string will be converted to lowercase.

    'heLlo World' => Hello World

    'heLlo-World' => Hello-World

## Installation

    npm install string-case --save

## Usage

```javascript
var $ = require('string-case')

var result = $.capitalize ('hello world'); // Hello world

var result = $.capitalizeAndLowerCaseAllTheOthers ('hello WoRld'); // Hello World

var result = $.initCap ('hello world'); // Hello World
var result = $.initCap ('hello-world'); // Hello-World

var result = $.initCapAndLowerCaseAllTheOthers ('helLo woRld'); // Hello World
var result = $.initCapAndLowerCaseAllTheOthers ('hello-world'); // Hello-World

```
