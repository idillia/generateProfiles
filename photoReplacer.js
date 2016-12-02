var _ = require('underscore');
var json = require("./mbti_infj_unique_users.json");
var fs = require('fs');

var photoReplacedUserList = _.each(json, function(item) {
  item.image_url = item.image_url.replace(/_normal/, '_bigger');
})

fs.writeFile('mbti_infj_uni_rep.json', JSON.stringify(photoReplacedUserList, null, ' '), 'utf8', function(err) {
    if (err) throw err;
    console.log('file saved');
});