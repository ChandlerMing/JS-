package main

import "fmt"

type Task struct { Title string; Priority int; Done bool }

func filter(tasks []Task, minPriority int, done bool) []Task {
	out := []Task{}
	for _, t := range tasks {
		if t.Priority >= minPriority && t.Done == done { out = append(out, t) }
	}
	return out
}

func main() {
	tasks := []Task{{"A",3,false},{"B",5,true},{"C",4,true}}
	fmt.Println(filter(tasks,4,true))
}
