const countConstruct = (target, wordBank, memo = {}) =>
{
  if(target === "")
    return 1;
  
  if(target in memo) return memo[target];

  let sum = 0;
  for(let word of wordBank)
  {
    if(target.indexOf(word)===0)
    {
      let remainder = target.slice(word.length);
      sum = sum + countConstruct(remainder, wordBank, memo);
    }
  }

  memo[target] = sum;
  return sum;
}

console.log(countConstruct("scdefasd",["abc","def","de","f","ab","scd","def","fasd","ef","asd"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","eee","eeeee","eeeeeeee"]))