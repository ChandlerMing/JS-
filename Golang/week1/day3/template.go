package main

import "fmt"

func divide(a, b int) (int, error) {
	defer fmt.Println("divide done")
	if b == 0 {
		return 0, fmt.Errorf("divide by zero")
	}
	return a / b, nil
}

func main() {
	q, err := divide(9, 3)
	fmt.Println("9/3 =>", q, err)
	q, err = divide(9, 0)
	fmt.Println("9/0 =>", q, err)
}
