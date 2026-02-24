package main

import (
	"fmt"
	"strings"
)

func wordCount(s string) map[string]int {
	res := map[string]int{}
	for _, w := range strings.Fields(strings.ToLower(s)) {
		res[w]++
	}
	return res
}

func main() {
	fmt.Println(wordCount("Go go TS go"))
}
