package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 120*time.Millisecond)
	defer cancel()
	select {
	case <-time.After(300 * time.Millisecond):
		fmt.Println("work done")
	case <-ctx.Done():
		fmt.Println("cancelled:", ctx.Err())
	}
}
