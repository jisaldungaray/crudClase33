var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController');

// creacion 

router.get('/crear', moviesController.create);

router.post('/crear', moviesController.update);

//lectura
router.get('/', moviesController.list);

//detalle
router.get('/:id', moviesController.detail);

//edicion
router.get('/edit/:id', moviesController.edit);
router.post('/edit/:id', moviesController.actualizar);

//borrado
router.post('/borrar/:id', moviesController.delete);

module.exports = router;