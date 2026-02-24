package main

import (
	"fmt"
	"strings"
	"time"
)

func concatPlus(n int) string {
	s := ""
	for i := 0; i < n; i++ { s += "a" }
	return s
}

func concatBuilder(n int) string {
	var b strings.Builder
	for i := 0; i < n; i++ { b.WriteByte('a') }
	return b.String()
}

func main() {
	n := 50000
	t1 := time.Now(); _ = concatPlus(n); d1 := time.Since(t1)
	t2 := time.Now(); _ = concatBuilder(n); d2 := time.Since(t2)
	fmt.Println("plus:", d1)
	fmt.Println("builder:", d2)
}
