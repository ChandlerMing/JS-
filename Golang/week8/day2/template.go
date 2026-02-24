package main

import (
	"fmt"
	"time"
)

func log(level, msg string) {
	fmt.Printf("ts=%s level=%s msg=%s\n", time.Now().Format(time.RFC3339), level, msg)
}

func main() {
	log("INFO", "service started")
	log("WARN", "slow query")
}
