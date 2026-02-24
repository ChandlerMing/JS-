package main

import "fmt"

type User struct { ID int; Name string }

type Repo struct { data []User }
func (r *Repo) Save(u User) { fmt.Println("repo.save"); r.data = append(r.data, u) }

type Service struct { repo *Repo }
func (s *Service) Register(name string) { fmt.Println("service.validate"); s.repo.Save(User{Name:name}) }

type Handler struct { svc *Service }
func (h *Handler) CreateUser(name string) { fmt.Println("handler.bind"); h.svc.Register(name) }

func main() {
	r := &Repo{}
	s := &Service{repo:r}
	h := &Handler{svc:s}
	h.CreateUser("alice")
	fmt.Println(r.data)
}
