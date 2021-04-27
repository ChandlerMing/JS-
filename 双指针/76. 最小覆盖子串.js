/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  const map = new Map();
  for ( let i = 0; i < t.length; i++ ) {
      let cur = t[i], mapValue = map.get(cur);
      if ( mapValue ) {
          map.set(cur,++mapValue);
      } else {
          map.set(cur,1);
      }
  }
  let l = 0, min_l = 0, min_len = s.length+1, count = 0;
  for (let r = 0; r < s.length; r++ ) {
      let cur = s[r], mapValue = map.get(cur);
      if (  mapValue === undefined  ) continue;
      if ( mapValue > 0 ) {
          count++;
      };
      map.set(cur,--mapValue);
      while ( count === t.length ) {
          if ( r - l + 1 < min_len ) {
              min_l = l;
              min_len = r - l + 1;
          }
          let cur1 = s[l], mapValue1 = map.get(cur1);
          if ( mapValue1 >= 0 ) {
              count--;
          }
          map.set(cur1,++mapValue1)
          l++;
      }
  }
  return min_len > s.length ? "" : s.substr( min_l, min_len );
};
console.log(minWindow("ADOBECODEBANC", "ABC"));