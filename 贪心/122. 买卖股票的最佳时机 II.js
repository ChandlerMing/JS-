/**
 * @param {number[]} prices
 * @return {number}
 * [7,1,5,3,6,4]
 */
 var maxProfit = function(prices) {
  let res = 0;
  for( let i = 0; i < prices.length - 1; i++ ) {
      if ( prices[i] < prices[i+1] ) res += prices[i+1] - prices[i];
  }
  return res;
};