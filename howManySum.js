const { allSum, allSumRemoveDuplicate } = require("./allSum");

const howManySum = (target, numbers, memo = {}) =>
{
  if(target === 0) return 1;
  
  if(target < 0) return 0;

  if(target in memo) return memo[target];

  let sum = 0;
  for(let x of numbers)
  {
    let remainder = target - x;
    sum = sum + howManySum(remainder, numbers, memo);
  }

  memo[target]=sum;
  return sum;
}

const howManySumRemoveDuplicate = (target, numbers) =>{
  let combine = allSumRemoveDuplicate(target, numbers);
  console.log(combine);
  return combine.length;
}

let targetSum = 30;
let numbers = [4,5,13,8,29];
//numbers = [4,9]
//numbers = [7,8];
console.log(howManySum(13, numbers));
console.log(howManySum(targetSum, numbers));

console.log("howManySumRemoveDuplicate ")
console.log(howManySumRemoveDuplicate(13,numbers));
console.log(howManySumRemoveDuplicate(targetSum,numbers));
console.log(howManySumRemoveDuplicate(100,numbers));
