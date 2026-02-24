package main

import "fmt"

type User struct { ID int; Name string }

func paginate(data []User, page, size int) []User {
	if size <= 0 { size = 10 }
	if page <= 0 { page = 1 }
	start := (page-1)*size
	if start >= len(data) { return []User{} }
	end := start + size
	if end > len(data) { end = len(data) }
	return data[start:end]
}

func main() {
	data := []User{{1,"A"},{2,"B"},{3,"C"},{4,"D"}}
	fmt.Println(paginate(data,1,2))
	fmt.Println(paginate(data,2,2))
	fmt.Println(paginate(data,3,2))
}
