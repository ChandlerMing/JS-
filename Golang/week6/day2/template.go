package main

import "fmt"

type User struct { ID int; Name string }

type Repo struct { data map[int]User }
func NewRepo() *Repo { return &Repo{data: map[int]User{}} }
func (r *Repo) FindByID(id int) (User, error) {
	u, ok := r.data[id]
	if !ok { return User{}, fmt.Errorf("user %d not found", id) }
	return u, nil
}

func main() {
	r := NewRepo(); r.data[1] = User{ID:1, Name:"A"}
	fmt.Println(r.FindByID(1))
	fmt.Println(r.FindByID(2))
}
