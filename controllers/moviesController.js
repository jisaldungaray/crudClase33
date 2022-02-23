const db = require('../database/models');

const moviesController = {
    create: function (req, res) {
        db.Genres.findAll()
            .then(function(genre) { 
                res.render("crearPelicula", {genre: genre});
            })
    },
    update: function(req, res) {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date,
            genre_id: req.body.genero
        })
        res.redirect('/movies/listado');
    },
    list: function(req, res) {
        db.Movies.findAll()
            .then((movie) => {
                res.render('movieslist', {movie:movie})
        })
    },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id, {
            include: [{association:"genre"}, {association: "actor"}]
        })
            .then((movie)=>{
                res.render('detallePelicula', {movie:movie})
            })
    },
    edit: function(req, res) {
        let allMovies = db.Movies.findByPk(req.params.id);
        let allGenres = db.Genres.findAll();

        Promise.all([allMovies, allGenres])
            .then(([movie, genre])=> {
                res.render('movieEdit', {movie:movie, genre:genre})
            })
    },
    actualizar: function(req, res){
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date,
            genre_id: req.body.genero
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/movies/' + req.params.id)
    },
    delete: function(req, res) {
        db.Actor.actor_movie.destroy({
            where: {
                id: req.params.id
            }
        })
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/movies')
    }   
}

module.exports = moviesController;