package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)
	go func() {
		time.Sleep(150 * time.Millisecond)
		ch <- "ok"
	}()
	select {
	case v := <-ch:
		fmt.Println("recv:", v)
	case <-time.After(100 * time.Millisecond):
		fmt.Println("timeout")
	}
}
