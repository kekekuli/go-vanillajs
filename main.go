package main

import (
	"fmt"
	"log"
	"net/http"

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
	movieHandler := handlers.MovieHandler{}

	http.HandleFunc("/api/movies/top", movieHandler.GetTopMovies)
	http.HandleFunc("/api/movies/random", movieHandler.GetRandomMovies)
	http.Handle("/", http.FileServer(http.Dir("public")))
	fmt.Println("Server running on http://localhost:8080")

	const addr = ":8080"
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatalf("Server failed: %s", err)
		logInstance.Error("Server failed", err)
	}
}
