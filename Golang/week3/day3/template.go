package main

import "fmt"

func abs(n int) int {
	if n < 0 { return -n }
	return n
}

func main() {
	tests := []struct{in, want int}{
		{-3, 3},
		{0, 0},
		{7, 7},
	}
	for i, tc := range tests {
		got := abs(tc.in)
		pass := got == tc.want
		fmt.Printf("case %d: in=%d got=%d want=%d pass=%v\n", i, tc.in, got, tc.want, pass)
	}
}
