const bestSum = (targetSum, numbers, memo={}) =>{
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  if(targetSum in memo)
    return memo[targetSum];

  let shortestCombine = null;
  for(let x of numbers){
    const remainder = targetSum - x;
    const reminderCombine = bestSum(remainder, numbers, memo);
    if(reminderCombine !== null)
    {
      const combine = [...reminderCombine, x];
      if(shortestCombine === null || shortestCombine.length > combine.length)
        shortestCombine = combine;
    }
  }

  memo[targetSum] = shortestCombine;
  return shortestCombine;
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[1,4,5]));
console.log(bestSum(100,[1,2,5,25]));