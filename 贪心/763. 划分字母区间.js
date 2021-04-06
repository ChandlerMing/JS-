var partitionLabels = function (S) {
  if (S.length < 2) return [1]; let map = new Map(); for (let i = 0; i < S.length; i++) {
    if (!map.has(S[i])) {
      map.set(S[i],
        [i, i]);
    } else { let obj = map.get(S[i]); obj[1] = i; map.set(S[i], obj); }
  } let arr = [...map.values()]; arr.sort((a,
    b) => {
    return a[0] - b[0];
  })
  let res = [];
  let prev = arr[0][1];
  res.push(arr[0][1] - arr[0][0] + 1);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] < prev) continue; if (arr[i][0] < prev) {
      let tmp = res.pop();
      res.push(tmp + arr[i][1] - prev);
    } else { res.push(arr[i][1] - arr[i][0] + 1); } prev = arr[i][1];
  } return res;
};
console.log(partitionLabels("ababcbacadefegdehijhklij"));