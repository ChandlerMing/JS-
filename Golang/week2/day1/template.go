package main

import "fmt"

func main() {
	base := []int{1, 2, 3, 4, 5}
	part := base[1:4]
	copyBuf := make([]int, len(part))
	copy(copyBuf, part)
	part[0] = 99
	fmt.Println("base:", base)
	fmt.Println("part:", part)
	fmt.Println("copyBuf:", copyBuf)
}
