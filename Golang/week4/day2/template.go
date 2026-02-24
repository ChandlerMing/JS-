package main

import "fmt"

func main() {
	jobs := make(chan int)
	go func() {
		for _, n := range []int{1,2,3} { jobs <- n }
		close(jobs)
	}()
	for j := range jobs {
		fmt.Println("consume", j)
	}
}
