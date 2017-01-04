var csv2json = require("csv2json");
var fs = require('fs');


fs.createReadStream('mbti_infj_users.csv')
.pipe(csv2json({}))
.pipe(fs.createWriteStream('mbti_infj_users.json'));
console.log("Done converting");