/*get all data for my garden page*/
var plantData = require('../plantData.json');

exports.view = function(request, response) {
    console.log(plantData);
    response.render('garden', plantData);
};