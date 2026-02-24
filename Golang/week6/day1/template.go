package main

import "fmt"

type User struct { ID int; Name string }
type UserRepo interface { Save(User); List() []User }

type MemoryRepo struct { data []User }
func (m *MemoryRepo) Save(u User) { m.data = append(m.data, u) }
func (m *MemoryRepo) List() []User { return append([]User{}, m.data...) }

func main() {
	r := &MemoryRepo{}
	r.Save(User{ID:1, Name:"A"})
	fmt.Println(r.List())
}
