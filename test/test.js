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
