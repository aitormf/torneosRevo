module.exports.list = function (req, res, next) {
   res.render('index',{title: "lista torneos"});
};

module.exports.nuevo = function (req, res, next) {
   res.render('index',{title: "Nuevo torneo"});
};

module.exports.torneoInfo = function (req, res, next) {
  var id = req.params.id;
  res.render('index', {title: 'torneo '+id});
};

module.exports.torneoEdit = function (req, res, next){
  var id = req.params.id;
  res.render('index', {title: 'Edit torneo '+id});
};

module.exports.torneoClas = function (req, res, next){
  var id = req.params.id;
  res.render('index', {title: 'Clasificacion torneo '+id});
};

module.exports.torneoRes = function (req, res, next){
  var id = req.params.id;
  res.render('index', {title: 'Resultados torneo '+id});
};
