package main

import "fmt"

type User struct { ID int; Name string }

type Repo interface { Save(User) }

type Memory struct { data []User }
func (m *Memory) Save(u User) { m.data = append(m.data, u) }

type Service struct { repo Repo }
func (s Service) Register(name string) error {
	if len(name) < 2 { return fmt.Errorf("name too short") }
	s.repo.Save(User{Name:name})
	return nil
}

func main() {
	m := &Memory{}
	s := Service{repo:m}
	fmt.Println(s.Register("A"))
	fmt.Println(s.Register("Alex"))
	fmt.Println(m.data)
}
