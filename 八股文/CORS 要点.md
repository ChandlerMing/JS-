# CORS 要点

CORS (Cross Origin Resource Share) 用于解决跨域。

## 1. 简单请求

（1) 请求方法是以下三种方法之一：

- HEAD
- GET
- POST

（2）HTTP的头信息不超出以下几种字段：

- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type：只限于三个值`application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`

（3）简单请求流程：

- 在请求 Header 中加入一个 Origin 字段，表明当前请求的来源（协议 + 域名 + 端口）。

- 如果 Origin 在服务器指定的域名请求范围内， 响应 Header 中会加上 **Access-Control-Allow-Origin**、**Access-Control-Allow-Credentials**、**Access-Control-Expose-Headers** 等字段，分别表示允许的 **Origin** 范围（请求 header 中对应的值 / *），是否允许携带Cookie（只能设置为true表示开启，且发送端需要在Ajax中打开withCredentials属性，想要false干脆就返回这个Header）,想要获取的额外 Header 字段（默认只有Cache-Control`、`Content-Language`、`Content-Type`、`Expires`、`Last-Modified`、`Pragma）等。
- 如果返回的 **Access-Control-Allow-Origin** 和 **Origin** 中不匹配， 则触发`XMLHttpRequest`对象的`onerror`回调函数。

## 2. 复杂请求

（1）非简单请求是那种对服务器有特殊要求的请求，比如请求方法是`PUT`或`DELETE`，或者`Content-Type`字段的类型是`application/json`。

（2）走预检流程（preflight）。

（3）复杂请求流程：

- 用 OPTIONS 方法发送一个预检请求，Header包含常规字段、Origin 和两个特殊字段 **Access-Control-Request-Method** 和 **Access-Control-Request-Headers** ，分别用于指定真正请求的 Method 和想要获取的额外Header字段等。
- 服务端收到预检请求后校验 `Origin`、`Access-Control-Request-Method`和`Access-Control-Request-Headers` ，如果通过则返回对应的字段。
- 如果返回的 **Access-Control-Allow-Origin** 和 Origin 中不匹配， 则触发`XMLHttpRequest`对象的`onerror`回调函数。
- 如果匹配， 则之后这个接口下的请求会和跨域简单请求一样，只增加 **Origin** 字段和 **Access-Control-Aollow-Origin** 字段。

