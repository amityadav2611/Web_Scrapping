const request = require('request');
const cheerio = require("cheerio");
const chalk = require("chalk");
//feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus/',cb);

console.log("After");
function cb(error, response, html) {
     if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        //console.log('body:', html); // Print the HTML for the Google homepage.
        handlehtml(html);
  }
}
function handlehtml(html){
    let selTool = cheerio.load(html);
    //let h1s = selTool("h1");
   // console.log(h1s.length);
   let contentArr = selTool("#maincounter-wrap span");
   let total = selTool(contentArr[0]).text();
   let deaths = selTool(contentArr[1]).text();
   let recovered = selTool(contentArr[2]).text();
   console.log(chalk.gray("Total Cases: "+total));
   console.log(chalk.red("Deaths: "+deaths));
   console.log(chalk.green("Recovery: "+recovered));
//    //[i] -> wrap selTool
//    for(let i = 0; i < contentArr.length; i++){
//        let data = selTool(contentArr[i]).text();
//        console.log("data",data);
//    }

}