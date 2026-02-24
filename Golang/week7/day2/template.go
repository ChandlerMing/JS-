package main

import (
	"fmt"
	"strings"
)

func issueToken(user string) string { return "tk_" + strings.ToLower(user) }
func verifyToken(t string) bool { return strings.HasPrefix(t, "tk_") }

func main() {
	t := issueToken("Alice")
	fmt.Println(t, verifyToken(t), verifyToken("bad"))
}
