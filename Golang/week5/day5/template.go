package main

import "fmt"

type User struct { ID int; Name string }

func main() {
	store := map[int]User{}
	store[1] = User{ID:1, Name:"A"}    // create
	u := store[1]; u.Name = "A1"; store[1] = u // update
	fmt.Println("list:", store)
	delete(store, 1) // delete
	fmt.Println("after delete:", store)
}
