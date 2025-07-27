package data

import "kekekuli.tech/keke/models"

type MovieStorage interface {
	GetTopMovies() ([]models.Movie, error)
	GetRandomMovies() ([]models.Movie, error)
	GetMovieByID(id int) (models.Movie, error)
	SearchMoviesByName(name string, order string, genere *int) ([]models.Movie, error)
	GetAllGenres() ([]models.Genre, error)
}
