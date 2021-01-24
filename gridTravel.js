// There is grid of m * n, start from the up-left-most grid, can only travel down side or right side, how many travel pathes there are.
let memoGridTravel = {};
const gridTravel=(m, n, memo={}) =>{
  if(m > n) return gridTravel(n, m, memo);
  let key = m + ',' + n;
  if(key in memo)
    return memo[key];
  if(m==0 || n==0) memo[key] = 0;
  else if(m==1 || n==1) memo[key] = 1;
  else memo[key] = gridTravel(m-1, n, memo) + gridTravel(m, n-1, memo);
  return memo[key];
}
console.log(gridTravel(4, 4, memoGridTravel));
console.log(memoGridTravel)
