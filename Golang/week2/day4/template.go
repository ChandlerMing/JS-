package main

import "fmt"

type Notifier interface { Notify(msg string) }

type Email struct{}
func (Email) Notify(msg string) { fmt.Println("email:", msg) }

type SMS struct{}
func (SMS) Notify(msg string) { fmt.Println("sms:", msg) }

func sendAll(ns []Notifier, msg string) {
	for _, n := range ns {
		n.Notify(msg)
	}
}

func main() {
	sendAll([]Notifier{Email{}, SMS{}}, "task done")
}
