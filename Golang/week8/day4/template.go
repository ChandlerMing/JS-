package main

import "fmt"

func main() {
	steps := []string{
		"go test ./...",
		"go build ./...",
		"docker build -t app:latest .",
		"write release notes",
	}
	for i, s := range steps {
		fmt.Printf("%d. %s\n", i+1, s)
	}
}
