package main

import "fmt"

type Report struct {
	Done   []string
	Risk   []string
	Next   []string
}

func main() {
	r := Report{
		Done: []string{"api done", "tests added", "dockerized"},
		Risk: []string{"need cache", "need metrics"},
		Next: []string{"add CI", "optimize queries"},
	}
	fmt.Printf("final report: %+v\n", r)
}
