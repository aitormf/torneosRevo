var express = require('express');

var ctrlTorneos = require('../controllers/torneos.js');
var router = express.Router();


/* GET home page. */
router.get('/', ctrlTorneos.list);
router.get('/torneos', ctrlTorneos.list);
router.get('/torneos/nuevo', ctrlTorneos.nuevo);
router.get('/torneos/:id', ctrlTorneos.torneoInfo);
router.get('/torneos/:id/edit', ctrlTorneos.torneoEdit);
router.get('/torneos/:id/clasificacion', ctrlTorneos.torneoClas);
router.get('/torneos/:id/resultados', ctrlTorneos.torneoRes);

module.exports = router;
