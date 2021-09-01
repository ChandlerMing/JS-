let temp = "我是{{name}}, 今年{{age}}岁, 性别{{gender}}。"

let data = {
  name: 'zqm',
  age: 21,
}

function transform(str, data) {
  return str.replace(/\{\{(.*?)\}\}/g, (match, key) => data[key.trim()] || '')
}

console.log(transform(temp, data))