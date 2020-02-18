
/*
 * GET home page.
 */

exports.user = function(req, res){
  res.render('nurtureUSER');
};

exports.guest = function(req, res){
	res.render('nurtureGUEST');
}