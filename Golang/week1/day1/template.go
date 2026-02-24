package main

import (
	"fmt"
	"reflect"
)

func main() {
	var age int
	name := "go-learner"
	var ok bool
	fmt.Println("name:", name)
	fmt.Println("zero age:", age)
	fmt.Println("zero bool:", ok)
	fmt.Printf("types => name:%T age:%T ok:%T\n", name, age, ok)
	nameType := reflect.TypeOf(name)
	fmt.Println("nameType:", nameType)
}
