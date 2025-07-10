package handlers

import (
	"encoding/json"
	"net/http"

	"kekekuli.tech/keke/models"
)

type MovieHandler struct{}

func (h *MovieHandler) writeJSONResponse(w http.ResponseWriter, data any) {
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func (h *MovieHandler) GetTopMovies(w http.ResponseWriter, r *http.Request) {
	movies := []models.Movie{
		{
			ID:       1,
			TMDB_ID:  181,
			Title:    "The Hacker",
			Generes:  []models.Genre{{ID: 1, Name: "Thriller"}},
			Keywords: []string{},
			Casting:  []models.Actor{{ID: 1, FirstName: "keke", LastName: "kuli"}},
		},
	}
	h.writeJSONResponse(w, movies)
}
func (h *MovieHandler) GetRandomMovies(w http.ResponseWriter, r *http.Request) {
	movies := []models.Movie{
		{
			ID:       1,
			TMDB_ID:  181,
			Title:    "The Hacker Random",
			Generes:  []models.Genre{{ID: 1, Name: "Thriller"}},
			Keywords: []string{},
			Casting:  []models.Actor{{ID: 1, FirstName: "keke", LastName: "kuli"}},
		},
	}
	h.writeJSONResponse(w, movies)
}
