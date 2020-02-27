/*get all data for my garden page*/
var plantData = require('../plantData.json');
var count = plantData.plants.length;

exports.view = function(request, response) {
	plantData['count'] = count;
    console.log(plantData);
    response.render('mygarden', plantData);
};

exports.addPlant = function(request, response) {
	count++;
	plantData['count'] = count;
    plantData.plants.unshift({"name": request.query.name, "image": request.query.image,
    "date": request.query.date, "time": request.query.time})
    response.render('mygarden', plantData);
    console.log(plantData);
}