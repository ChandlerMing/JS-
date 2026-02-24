package main

import "fmt"

func run(cmd string) (string, error) {
	switch cmd {
	case "build":
		return "build ok", nil
	case "test":
		return "test ok", nil
	default:
		return "", fmt.Errorf("unknown command: %s", cmd)
	}
}

func main() {
	for _, c := range []string{"build", "test", "deploy"} {
		out, err := run(c)
		fmt.Println(c, "=>", out, err)
	}
}
