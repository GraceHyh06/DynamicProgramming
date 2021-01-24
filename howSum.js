const howSum = (targetSum, numbers, memo = {}) =>
{
  if(targetSum == 0) return [];
  if(targetSum <0 ) return null;
  if(targetSum in memo) return memo[targetSum];

  for(let x of numbers)
  {
    const reminder = targetSum - x;
    const reimderResult = howSum(reminder, numbers);

    if(reimderResult !== null)
    {
      memo[targetSum] = [...reimderResult, x];
      return memo[targetSum];
    } 
  }

  memo[targetSum] = null;
  return memo[targetSum];
}

//console.log(howSum(8, [2, 3, 5]));
//console.log(howSum(13, [5,3,4,7]));
//console.log(howSum(7, [3,5,6,4]));
//console.log(howSum(25, [4,6,7,8,9]));

module.exports = howSum
