package main

import (
	"fmt"
	"sync"
)

func main() {
	jobs := make(chan int)
	out := make(chan int)
	var wg sync.WaitGroup
	worker := func() {
		defer wg.Done()
		for j := range jobs { out <- j * j }
	}
	for i := 0; i < 2; i++ { wg.Add(1); go worker() }
	go func() {
		for _, j := range []int{1,2,3,4} { jobs <- j }
		close(jobs)
		wg.Wait()
		close(out)
	}()
	for v := range out { fmt.Println(v) }
}
