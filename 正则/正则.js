// 匹配16进制颜色
let string1 = "#ffbbad #Fc01DF #FFF #ffE";
let regexp1 = /#([0-9a-fA-F]{6}|([0-9a-fA-f]){3})/g;
console.log(string1.match(regexp1))

// 匹配时间
let string2 = "08:00 12:10 20:01 23:50";
let regexp2 = /([0-1][0-9]|[2][0-3]):([0-5][0-9])/g;
console.log(string2.match(regexp2));

// 匹配日期
let string3 = "2017-06-10 1988-07-10";
let regexp3 = /([0-9]{4})-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])/g;
console.log(string3.match(regexp3));

// 匹配window操作系统文件路径
let regexp4 = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log(regexp4.test("F:\\study\\javascript\\regex\\regular expression.pdf"));
console.log(regexp4.test("F:\\study\\javascript\\regex\\"));
console.log(regexp4.test("F:\\study\\javascript"));
console.log(regexp4.test("F:\\"));

// 匹配id
let string5 = '<div id="container" class="main"></div>';
let regexp5 = /id=".*?"/;
console.log(string5.match(regexp5)[0]);

// 数字价格千分位分割
let string6 = '123456789';
let regexp6 = /(?!^)(?=(\d{3})+$)/g;
console.log(string6.replace(regexp6, ','))

// 手机号3-4-4分割
let string7 = '13826362828';
let regexp7 = /(?=(\d{4})+$)/g;
console.log(string7.replace(regexp7, '-'))

// 动态手机号3-4-4分割
let string8 = ['123', '1234', '123456', '1234567', '12345678', '123456789', '12345678911']
const formatMobile = (mobile) => {
  return String(mobile).slice(0, 11)
    .replace(/(?<=\d{3})\d+/, ($0) => '-' + $0) // 123-45678911
    .replace(/(?<=[\d-]{8})\d{1,4}/, ($0) => '-' + $0)
}
string8.forEach(s => console.log(formatMobile(s)))

// 密码长度是6-12位，由数字、小写字母和大写字母组成，但必须至少包括2种字符
// let reg = /(?=.*\d)/
// 这个正则的意思是，匹配的是一个位置
// 这个位置需要满足"任意数量的符号，紧跟着是个数字"，
// 注意它最终得到的是个位置而不是其他的东西
// (?=.*条件)经常用来做条件限制
let string9 = ['123', '1a2', '1A2', 'aA', '123456', 'abcdef', '1q2345', '1Q2345', 'abcdeF'];
let regexp9 = /(((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z]))^[a-zA-Z\d]{6,12}$/;
string9.forEach(s => console.log(regexp9.test(s)));

// 提取连续重复的字符串
function collectRepeat(str) {
  let res = [];
  let regexp10 = /(.+)\1+/g;
  str.replace(regexp10, ($0, $1) => { $1 && res.push($1) });
  return res;
}
console.log(collectRepeat('12323454545666'));

// 实现一个trim函数
function myTrim(str) {
  let regexp11 = /^\s*|\s*$/g;
  return str.replace(regexp11, '');
}
let string11 = ['    zqm', 'zqm    ', ' zqm ', '   zqm   ', ' zq m ', 'zqm ', ' zqm'];
string11.forEach(str => console.log(myTrim(str)));

// 实现HTML转义
function escape(str) {
  const escapeMaps = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39'
  }
  const escapeRegexp = new RegExp([`[${Object.keys(escapeMaps).join('')}]`], 'g');
  return str.replace(escapeRegexp, match => `&${escapeMaps[match]};`)
}
console.log(escape(`
  <div>
    <p>hello world</p>
  </div>
`))

// 实现HTML反转义
function unescape(str) {
  const unescapeMaps = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"',
    '#39': "'"
  }
  const unescapeRegexp = /&([^;]+);/g
  return str.replace(unescapeRegexp, (match, unescapeKey) => {
    return unescapeMaps[unescapeKey] || match
  })
}
console.log(unescape(`
  &lt;div&gt;
    &lt;p&gt;hello world&lt;/p&gt;
  &lt;/div&gt;
`))

// 将字符串驼峰化
let string14 = ['foo Bar', 'foo----bar--', 'foo_bar__'];
let regexp14 = /[-_\s]+(.)?/g;
string14.forEach(str => console.log(str.replace(regexp14, ($0, $1) => $1 ? $1.toUpperCase() : '')));

// 将字符串首字母转化为大写，剩下为小写
let string15 = ['hello world', 'hello WORLD'];
let regexp15 = /(^|\s+)\w/g;
string15.forEach(str => console.log(str.toLowerCase().replace(regexp15, ($0) => $0.toUpperCase())));

// 获取网页中所有img标签的图片地址
const matchImgs = (sHtml) => {
  const imgUrlRegex = /<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi
  let matchImgUrls = []
  sHtml.replace(imgUrlRegex, (match, $1) => {
    $1 && matchImgUrls.push($1)
  })
  return matchImgUrls
}

// 通过name获取url query参数
const string16 = ['https://juejin.cn/?name=zqm&sex=boy', 'https://juejin.cn/?sex=boy&name=zqm', 'https://juejin.cn/?sex=boy&name=zqm&age=100']
const getQueryByName = (str, name) => {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`)
  const queryNameMatch = str.match(queryNameRegex)
  // 一般都会通过decodeURIComponent解码处理
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : ''
}
string16.forEach((str) => {
  console.log(getQueryByName(str, 'name'))
})