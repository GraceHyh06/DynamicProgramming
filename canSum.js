function canSum(targetSum, numbers, memo={})  
{
  if(targetSum == 0)
    return true;
  if(targetSum < 0)
    return false;
  if(targetSum in memo)
    return memo[targetSum];

  for(let x of numbers){
    if(canSum(targetSum-x, numbers, memo)){
      memo[targetSum] = true;
      return true;
    }
  };

  memo[targetSum] = false;
  return false;
}

//console.log(canSum(14,[4,6]));

module.exports = canSum

