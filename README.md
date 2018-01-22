# Whitespace-Parse

<p align="center">
<img height="150" width="auto" src="https://nulldev.org/img/whitespace.png" /><br>
Custom single-line whitespace de- and encoder
</p>

## :information_source: About

This NodeJS package allows you to encode text to whitespace and vice versa. <br>
**Note:** This is **CUSTOM** whitespace! There are _no_ linebreaks! Only tabs and spaces.

How?

```Assembly
    a = 97                        - ASCII Character code in decimal
    a = 1100001                   - Same value in binary
    a = '		    	' - In Whitespace
```

So each character has a sequence of exactly 7 binary values. <br>
If the the encoding of a string has less characters, for example "!" which decodes to "100001" (6 characters) a padding needs to be applied at the start of the string. <br>
In this case it would be 0 + 100001 to get to the 7 characters.

## :postbox: NPM

[![](https://nodei.co/npm/whitespace-parse.svg?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/whitespace-parse)

<hr>

## :wrench: Installation

```Assembly
npm i whitespace-parse
```

<hr>

## :bulb: Usage

**Example:**

```Javascript
var whitespace = require("whitespace-parse");

console.log(whitespace.decode("	  	   		 	  	"));
// => "Hi"

console.log(whitespace.encode("Hi"));
// => "	  	   		 	  	"
```

<hr>

## :copyright: Copyright

`Copyright (c) 2018 NullDev`