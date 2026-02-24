package main

import (
	"errors"
	"fmt"
)

type FieldError struct {
	Field string
	Msg   string
}

func (e FieldError) Error() string { return fmt.Sprintf("%s: %s", e.Field, e.Msg) }

func validateName(name string) error {
	if len(name) < 2 {
		return fmt.Errorf("validate user: %w", FieldError{Field: "name", Msg: "too short"})
	}
	return nil
}

func main() {
	err := validateName("A")
	fmt.Println(err)
	var fe FieldError
	fmt.Println("as FieldError:", errors.As(err, &fe), fe)
}
