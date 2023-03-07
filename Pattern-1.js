"use strict";
//
//      Leonardo Camilo (Typescrypt) / Proyecto final / BC10 - State Machines
//  
//   a)
//      Pattern 1: "The", case insensitive.
//      Valid: The, THE, the, THe, Atthebute, etc.
//      Invalid: eht, aaaaaaaa, Attribute, etc.
//
// 
exports.__esModule = true;
/*Pure and simple solution*/
var fs = require("fs");
var fileName = 'Example-Text.txt';
var fileContent = fs.readFileSync(fileName, 'utf8');
fileContent = fileContent.toLowerCase();
var counter = 0;
var start = Date.now();
for (var i = 0; i < fileContent.length; i++) {
    if (fileContent[i] == 't') {
        if (fileContent[i + 1] == 'h') {
            if (fileContent[i + 2] == 'e') {
                counter++;
                i++;
            }
        }
    }
}
var end = Date.now();
console.log("Pattern-1 /Pure code solution.");
// Number of words Pattern 
console.log("Number of words: " + counter);
// Execution time
console.log("Execution time: ".concat(end - start, " ms"));
/*CodeRegex Solution*/
var fileNameCR = 'Example-Text.txt';
var fileContentCR = fs.readFileSync(fileNameCR, 'utf8');
fileContentCR = fileContentCR.toLowerCase();
var counterCR = 0;
var startCR = Date.now();
// let Pattern = /the/;
// let regex: RegExp = Pattern;
// let matches = RegExp.prototype.exec(fileContent);
// let result: RegExpExecArray;
var regex = /the/g;
var count = 0;
while (regex.exec(fileContent)) {
    count++;
}
// let count = 0; 
var endCR = Date.now();
console.log("Pattern-1 /CodeRegex Solution");
// Number of words Pattern 
console.log("Number of words: " + count);
// Execution time
console.log("Execution time: ".concat(endCR - startCR, " ms"));
