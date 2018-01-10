"use strict";

let validate = function(input){
    let chars = input.length;

    if (chars < 7)               throw new Error( "Invalid input. A valid string has a minimum of 7 characters."    );
    if (!/[ ]|[	]/g.test(input)) throw new Error( "Invalid input. A valid input must only contain spaces and tabs." );
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
        for (let char of input) buffer.push(char.charCodeAt(0).toString(2));
        return buffer.join("").toString().replace(/0/g, " ").replace(/1/g, "	");
    }
}

module.exports = whitespace;
