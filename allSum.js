const allSum = (target, numbers, memo={}) =>{
  if(target === 0) return [[]];
  
  if(target < 0) return null;

  if(target in memo) return memo[target];

  let targetResult = null;
  for(let x of numbers)
  {
    let remainder = target - x;
    let remainderResult = allSum(remainder, numbers, memo);
    if(remainderResult !== null)
    {
      if(targetResult === null) targetResult = [];
      remainderResult.map( c =>{
        let newResult = [x, ...c];
        targetResult.push(newResult);
      });
    }
  }

  memo[target]=targetResult;
  return targetResult;
}

const allSumRemoveDuplicate = (target, numbers, memo={}) =>{
  if(target === 0) return [[]];
  
  if(target < 0) return null;

  if(target in memo) return memo[target];

  let targetResult = null;
  for(let x of numbers)
  {
    let remainder = target - x;
    let remainderResult = allSumRemoveDuplicate(remainder, numbers, memo);
    if(remainderResult !== null)
    {
      if(targetResult === null) targetResult = [];
      remainderResult.map( c => {
        let newResult = [x, ...c];
        if(!isDuplicate(targetResult, newResult)) 
          targetResult.push(newResult)
        });
    }
  }

  memo[target]=targetResult;
  return targetResult;
}

const isDuplicate = (resultBank, newResult) =>
{
  for(let x of newResult)
  {
    if(resultBank.every(result => result.indexOf(x)<0))
      return false;
  }
  return true;
}

/*let targetSum = 30;
let numbers = [4,5,13,8,29];
//numbers = [4,9]
//numbers = [7,8];
console.log("allSum(12, "+numbers+")");
console.log(allSum(12, numbers));
console.log("allSum(13, "+numbers+"): ");
console.log(allSum(13, numbers));

console.log("allSumRemoveDuplicate(12, "+numbers+"): ");
console.log(allSumRemoveDuplicate(12, numbers));
console.log("allSumRemoveDuplicate(13, "+numbers+"): ");
console.log(allSumRemoveDuplicate(13, numbers));

console.log("allSum(30, "+numbers+"): ");
console.log(allSum(30, numbers).length);

console.log("allSumRemoveDuplicate(30, "+numbers+"): ");
console.log(allSumRemoveDuplicate(30, numbers));
*/
module.exports = {allSum, allSumRemoveDuplicate};