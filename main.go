package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"kekekuli.tech/keke/data"
	"kekekuli.tech/keke/handlers"
	"kekekuli.tech/keke/logger"
)

func initialzeLogger() *logger.Logger {
	logInstance, err := logger.NewLogger("movie.log")
	if err != nil {
		log.Fatalf("Failed to create logger: %v", err)
	}
	defer logInstance.Close()
	return logInstance
}

func main() {
	logInstance := initialzeLogger()

	if err := godotenv.Load(); err != nil {
		log.Fatal("No .env file was available")
	}

	dbConnectStr := os.Getenv("DATABASE_URL")
	if dbConnectStr == "" {
		log.Fatal("DATABASE_URL not set")
	}
	db, err := sql.Open("postgres", dbConnectStr)
	if err != nil {
		log.Fatalf("Failed to connect to the DB: %V", err)
	}
	defer db.Close()

	movieRepo, err := data.NewMovieRepository(db, logInstance)
	if err != nil {
		log.Fatal("Failed to initialize movie repository")
	}

	accountRepo, err := data.NewAccountRepository(db, logInstance)
	if err != nil {
		log.Fatal("Failed to initialize account repository")
	}

	movieHandler := handlers.NewMovieHandler(movieRepo, logInstance)
	accountHandler := handlers.NewAccountHandler(accountRepo, logInstance)

	http.HandleFunc("/api/movies/top/", movieHandler.GetTopMovies)
	http.HandleFunc("/api/movies/random/", movieHandler.GetRandomMovies)
	http.HandleFunc("/api/movies/search/", movieHandler.SearchMovies)
	http.HandleFunc("/api/movies/", movieHandler.GetMovie)
	http.HandleFunc("/api/genres/", movieHandler.GetGenres)
	http.HandleFunc("/api/account/register/", accountHandler.Register)
	http.HandleFunc("/api/account/authentica/", accountHandler.Authenticate)

	catchAllClientRoutesHandler := func(w http.ResponseWriter, r *http.Request) {
		logInstance.Info("Hit client fallback")
		http.ServeFile(w, r, "./public/index.html")
	}

	http.HandleFunc("/movies", catchAllClientRoutesHandler)
	http.HandleFunc("/movies/", catchAllClientRoutesHandler)
	http.HandleFunc("/account/", catchAllClientRoutesHandler)

	http.Handle("/", http.FileServer(http.Dir("public")))
	fmt.Println("Server running on http://localhost:8080")

	const addr = ":8080"
	err = http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatalf("Server failed: %s", err)
		logInstance.Error("Server failed", err)
	}
}
