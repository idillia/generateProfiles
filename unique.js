var _ = require('underscore');
var json = require("./mbti_infj_users.json");
var fs = require('fs');


var uniqueUserList = _.uniq(json, function(item, key, id){
  return item.id;
});


fs.writeFile('mbti_infj_unique_users.json', JSON.stringify(uniqueUserList, null, ' '), 'utf8', function(err) {
    if (err) throw err;
    console.log('file saved');
});