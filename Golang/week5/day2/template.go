package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
)

type Req struct { Name string `json:"name"` }

func echo(w http.ResponseWriter, r *http.Request) {
	var in Req
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
		http.Error(w, "bad json", http.StatusBadRequest)
		return
	}
	_ = json.NewEncoder(w).Encode(map[string]string{"hello": in.Name})
}

func main() {
	r := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodPost, "/echo", strings.NewReader(`{"name":"go"}`))
	echo(r, req)
	fmt.Println(r.Code, r.Body.String())
}
