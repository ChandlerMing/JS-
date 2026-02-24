package main

import (
	"fmt"
	"os"
)

type Config struct { Env string; Port string }

func load() Config {
	env := os.Getenv("APP_ENV")
	if env == "" { env = "dev" }
	port := os.Getenv("APP_PORT")
	if port == "" { port = "8080" }
	return Config{Env:env, Port:port}
}

func main() { fmt.Println(load()) }
