const canConstruct = (target, wordBank, memo={})=>{
  if(target==="")
    return true;

  if(target in memo)
    return memo[target];

  for(let word of wordBank)
  {
    if(target.indexOf(word)===0)
    {
      let remainder = target.slice(word.length, target.length);
      if(canConstruct(remainder, wordBank, memo))
      {
        memo[target] = true;
        return true;
      }  
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstruct("scdefasd",["abc","def","de","f","ab","scd","def","fasd","ef","asd"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","eee","eeeee","eeeeeeee"]))