/*get all data for my garden page*/
var plantData = require('../plantData.json');

exports.view = function(request, response) {
    console.log(plantData);
    response.render('mygarden', plantData);
};

exports.addPlant = function(request, response) {
    console.log(plantData);
    plantData.plants.push({"name": request.query.name, "image": "#",
    "date": request.query.date, "time": request.query.date})
    response.render('mygarden', plantData);
}