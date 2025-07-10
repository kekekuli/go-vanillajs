package models

type Movie struct {
	ID          int
	TMDB_ID     int
	Title       string
	Tagline     string
	ReleaseYear int
	Generes     []Genre
	Overview    *string
	Score       *float32
	Popularity  *float32
	Keywords    []string
	PosterURL   *string
	TrailerURL  *string
	Casting     []Actor
}
