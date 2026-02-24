package main

import "fmt"

type Task struct { ID int; Title string; Done bool }

func main() {
	store := map[int]Task{}
	store[1] = Task{ID:1, Title:"learn go"}
	t := store[1]; t.Done = true; store[1] = t
	fmt.Println("after update:", store[1])
	delete(store, 1)
	fmt.Println("after delete:", store)
}
