var webshot = require('webshot');
var _ = require('underscore');
var json = require("./profiles.json");
var fs = require('fs');

var options = {
  renderDelay: 10000
}
// var snapAndSave = function() {
//   for (var i=0; i<3; i++) {
//       console.log(json[i].prof_url, json[i].screen_name)

//   webshot(json[i].prof_url, 'images/snapshots/' + json[i].screen_name + '.png', options, function(err) {
//       if(err) {
//         console.log("Some error: ", err)
//       }
//   });
//     json[i].prof_url = 'images/snapshots/' + json[i].screen_name + '.png';
//   }  
// };

// var a = snapAndSave();


// fs.writeFile('profiles_snap.json', JSON.stringify(a, null, ' '), 'utf8', function(err) {
//     if (err) throw err;
//     console.log('file saved');
// });

