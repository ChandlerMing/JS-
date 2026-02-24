package main

import "fmt"

type Account struct {
	Name    string
	Balance int
}

func (a *Account) Deposit(v int) { a.Balance += v }
func (a *Account) Withdraw(v int) error {
	if v > a.Balance {
		return fmt.Errorf("insufficient balance")
	}
	a.Balance -= v
	return nil
}

func main() {
	a := &Account{Name: "tom", Balance: 100}
	a.Deposit(50)
	_ = a.Withdraw(120)
	fmt.Println(*a)
}
