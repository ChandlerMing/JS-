package main

import "fmt"

func classify(n int) string {
	if n < 0 {
		return "negative"
	}
	switch {
	case n == 0:
		return "zero"
	case n%2 == 0:
		return "even"
	default:
		return "odd"
	}
}

func sumRange(n int) int {
	s := 0
	for i := 1; i <= n; i++ {
		s += i
	}
	return s
}

func main() {
	fmt.Println(classify(-1), classify(0), classify(3), classify(8))
	fmt.Println("sumRange(10)=", sumRange(10))
}
