let temp = "我是{{name}}, 今年{{age}}岁, 性别{{gender}}。"

let data = {
  name: 'zqm',
  age: 21,
}

function transform(str, data) {
  let _str = str.replace(/\{\{(\w+)\}\}/g, '$1')
  console.log(_str)
}

console.log(transform(temp,data))