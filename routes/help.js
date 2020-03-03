
/*
 * GET help page.
 */

exports.user = function(req, res){
    res.render('helpUSER');
  };

exports.guest = function(req, res){
   res.render('helpGUEST');
 };