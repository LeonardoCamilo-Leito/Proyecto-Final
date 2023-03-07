
//
//      Leonardo Camilo (Typescrypt) / Proyecto final / BC10 - State Machines
//  
//   b)
//      Pattern 2: " The ", case insensitive, word.
//      Valid: The, THE, the, THe...
//      Invalid: eht, aaaaaaaa, Attribute, Atthebute, etc.
// 

            /* Pure and simple solution */


import * as fs from 'fs';

const fileName: string = 'Example-Text.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');
fileContent = fileContent.toLowerCase();

let counter = 0;

const start = Date.now();

for (let i = 0; i < fileContent.length; i++) 
{   
    if (fileContent[i] == ' ')
        if (fileContent[i+1] == 't'){
            if (fileContent[i+2] == 'h'){
                if (fileContent[i+3] == 'e')
                    if (fileContent[i+4] == ' '){
                        
                    counter ++;
                    i ++;

            }
        }
    }
 }

const end = Date.now();

console.log("Pattern-2 / Pure code solution ");

// Number of words Pattern 
console.log("Number of words: " + counter);

// Execution time
console.log(`Execution time: ${end - start} ms`);



            /*CodeRegex Solution*/


const fileNameCR: string = 'Example-Text.txt';
let fileContentCR = fs.readFileSync(fileNameCR, 'utf8');
fileContentCR = fileContentCR.toLowerCase();
            
let counterCR = 0;
            
const startCR = Date.now();
                
    let regex = / the /g;
    let count = 0;
        while (regex.exec(fileContent)) {
                count++;
                    }
              
const endCR = Date.now();
            
            
console.log("Pattern-1 / CodeRegex Solution ");
            
// Number of words Pattern 
console.log("Number of words: " + count);
            
// Execution time
console.log(`Execution time: ${endCR - startCR} ms`);
            