package main

import (
	"fmt"
	"net/http"
	"net/http/httptest"
)

type Handler func(http.ResponseWriter, *http.Request)

type Middleware func(Handler) Handler

func withRecover(next Handler) Handler {
	return func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if recover() != nil { http.Error(w, "internal", http.StatusInternalServerError) }
		}()
		next(w, r)
	}
}

func main() {
	h := withRecover(func(w http.ResponseWriter, _ *http.Request) { panic("boom") })
	r := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/", nil)
	h(r, req)
	fmt.Println(r.Code, r.Body.String())
}
