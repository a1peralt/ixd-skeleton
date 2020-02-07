exports.view = function(req, res){
	var pageName = req.params.pageName;
	res.render('settings', {'pageName': pageName});
};