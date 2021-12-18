const fs = require("fs");
console.log("Before");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// console.log("After");
// console.log("Mean while");
//asyn function
fs.readFile("f1.txt",cb);
function cb(err,data){
    if(err){
        console.log(err)
    }else{
        console.log("data" + data);
    }
}
console.log("After");
console.log("Mean while");