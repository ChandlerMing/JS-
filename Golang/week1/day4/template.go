package main

import "fmt"

func reverseRune(s string) string {
	rs := []rune(s)
	for i, j := 0, len(rs)-1; i < j; i, j = i+1, j-1 {
		rs[i], rs[j] = rs[j], rs[i]
	}
	return string(rs)
}

func main() {
	fmt.Println(reverseRune("golang"))
	fmt.Println(reverseRune("你好Go"))
}
