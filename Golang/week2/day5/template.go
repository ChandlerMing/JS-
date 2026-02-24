package main

import "fmt"

type Student struct {
	ID   int
	Name string
	Score int
}

func main() {
	store := map[int]Student{}
	store[1] = Student{ID: 1, Name: "A", Score: 90}
	store[2] = Student{ID: 2, Name: "B", Score: 88}
	store[2] = Student{ID: 2, Name: "B", Score: 92}
	delete(store, 1)
	fmt.Println(store)
}
