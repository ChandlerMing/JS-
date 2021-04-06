var findContentChildren = function (g, s) {
    g = g.sort((a,b)=>a-b);
    s = s.sort((a,b)=>a-b);
    let child = 0, cookie = 0;
    while (child < g.length && cookie < s.length) {
        if (g[child] <= s[cookie]) child++;
        cookie++;
    }
    return child;
};
console.log(findContentChildren([10,9,8,7],[5,6,7,8]));