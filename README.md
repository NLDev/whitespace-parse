# Whitespace-Parse

<p align="center">
Custom single-line whitespace de- and encoder
</p>

## :information_source: About

This NodeJS package allows you to encode text to whitespace and vice versa. <br>
**Note:** This is **CUSTOM** whitespace! There are _no_ linebreaks! Only tabs and spaces.

How?

```Assembly
a = 97                        - ASCII Character code in decimal
a = 1100001                   - Same value in binary
a = '		    	'     - In Whitespace
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

## :bulb: API

- [decode()](#decode)
- [encode()](#encode)
- [toBinary()](#tobinary)

### decode()

| No. | Arguments | Description | Required | Default |
| --- | --- | --- | --- | --- |
| 1 | string | the whitespace string to decode | yes | N/A |

**Example:**

```Javascript
var whitespace = require("whitespace-parse");

console.log(whitespace.decode("	  	   		 	  	"));
// => "Hi"
```

### encode()

| No. | Arguments | Description | Required | Default |
| --- | --- | --- | --- | --- |
| 1 | string | the ASCII string to encode | yes | N/A |

**Example:**

```Javascript
var whitespace = require("whitespace-parse");

console.log(whitespace.encode("Hi"));
// => "	  	   		 	  	"
```

### toBinary()

| No. | Arguments | Description | Required | Default |
| --- | --- | --- | --- | --- |
| 1 | string | The ASCII string to encode | yes | N/A |
| 2 | boolean | Should all character sequences be split by a space | no | no |

**Example:**

```Javascript
var whitespace = require("whitespace-parse");

console.log(whitespace.toBinary("hi"));
// => "11010001101001"

console.log(whitespace.toBinary("hi", true));
// => "1101000 1101001"
```

<hr>

## :copyright: Copyright

`Copyright (c) NullDev`
