package main

import (
	"fmt"
	"net/http"
	"net/http/httptest"
)

func ping(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte("pong"))
}

func main() {
	r := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/ping", nil)
	ping(r, req)
	fmt.Println(r.Code, r.Body.String())
}
