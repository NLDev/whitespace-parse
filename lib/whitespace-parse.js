"use strict";

let validate = function(input){
    let chars = input.length;

    if (chars < 7)             throw new Error( "Invalid input. A valid string needs to be divisible by 7."       );
    if (chars % 7 !== 0)       throw new Error( "Invalid input. A valid string has a minimum of 7 characters."    );
    if (!/^\s*$/g.test(input)) throw new Error( "Invalid input. A valid input must only contain spaces and tabs." );
};

let whitespace = {
    decode: function(input){
        validate(input);

        let buffer = [];
        input.replace(/.{7}/g, function(char){
            let bit = char.replace(/ /g, "0").replace(/	/g, "1");
            buffer.push(String.fromCharCode(parseInt(bit, 2)));
        });
        return buffer.join("").toString();
    },

    encode: function(input){
        let buffer = [];
        for (let char of input){
            let bit = char.charCodeAt(0).toString(2);
            while (bit.length < 7) bit = "0" + bit;
            buffer.push(bit);
        }
        return buffer.join("").toString().replace(/0/g, " ").replace(/1/g, "	");
    }
}

module.exports = whitespace;
