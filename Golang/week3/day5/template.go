package main

import "fmt"

func normalizeScore(v int) (int, error) {
	if v < 0 || v > 100 {
		return 0, fmt.Errorf("score out of range: %d", v)
	}
	return v, nil
}

func main() {
	inputs := []int{99, -1, 101, 88}
	for _, v := range inputs {
		n, err := normalizeScore(v)
		fmt.Println(v, "=>", n, err)
	}
}
