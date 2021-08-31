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