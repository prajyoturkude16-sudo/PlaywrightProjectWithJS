const { count } = require("node:console");

console.log("--------1 word check in paragraph--------");

let para = "I am learing playwright using java script and selenium using java language";
let words = "using java c++";
let wordArray = words.split(" ");

let paraArray = para.toLowerCase().split(" ");
for(let word of wordArray)
{   
    let count =0; 
    for(let pword of paraArray)
    {
        if(pword === word)
        {
            count++;
        }
    }

    console.log(`${word} present ${count} times in the paragraph`);

    if(count===2)
    {
        console.log(`first duplicate word in para is ${word}`);
        break;

    }
}
