package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
)

type ErrResp struct {
	Code string `json:"code"`
	Msg  string `json:"message"`
}

func writeErr(w http.ResponseWriter, status int, code, msg string) {
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(ErrResp{Code: code, Msg: msg})
}

func main() {
	r := httptest.NewRecorder()
	writeErr(r, http.StatusBadRequest, "INVALID_PARAM", "name required")
	fmt.Println(r.Code, r.Body.String())
}
