"use strict";
let whitespace = require("../lib/whitespace-parse");

////////////////////////////////
//----------------------------//
// Copyright (c) 2017 NullDev //
//----------------------------//
////////////////////////////////

console.log();

let testStr1 = "	  	   		 	  	 	    	";

console.log("'" + testStr1 + "' = '" + whitespace.decode(testStr1) + "'");

console.log();

let testStr2 = "Hi!";

console.log("'" + testStr2 + "' = '" + whitespace.encode(testStr2) + "'");

console.log();

let testStr3 = "hi";

console.log("'" + testStr3 + "' = '" + whitespace.toBinary(testStr3) + "'");

console.log();

let testStr4 = "hey";

console.log("'" + testStr4 + "' = '" + whitespace.toBinary(testStr4, true) + "'");

console.log();
