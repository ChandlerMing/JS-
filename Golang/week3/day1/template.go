package main

import (
	"errors"
	"fmt"
)

var ErrBadInput = errors.New("bad input")

func parseAge(v int) error {
	if v < 0 {
		return fmt.Errorf("parse age: %w", ErrBadInput)
	}
	return nil
}

func main() {
	err := parseAge(-1)
	fmt.Println(err)
	fmt.Println("is ErrBadInput:", errors.Is(err, ErrBadInput))
}
