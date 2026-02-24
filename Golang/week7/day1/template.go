package main

import "fmt"

type Modules struct { Auth, Task, User string }

func main() {
	m := Modules{Auth:"auth", Task:"task", User:"user"}
	fmt.Printf("modules: %+v\n", m)
	fmt.Println("flow: handler -> service -> repo")
}
