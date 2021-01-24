const allConstruct = (target, wordBank, memo = {}) =>{
  if(target === "")
    return [[]];

  if(target in memo)
    return memo[target];

  let combine = null;
  for(let word of wordBank)
  {
    if(target.indexOf(word) === 0)
    {
      let remainder = target.slice(word.length);
      let remainderResult = allConstruct(remainder, wordBank, memo);
      if(remainderResult !== null)
      {
        if(combine === null) combine = [];
        remainderResult.map( c => combine.push([word, ...c]));
      }
    }
  }
  
  memo[target] = combine;
  return combine;
}

console.log(allConstruct("scdefasd",["abc","def","de","f","ab","scd","def","fasd","ef","asd","scde"]))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","eee","eeeee","eeeeeeee"]))
console.log(allConstruct("purple",["purp","p","ur","le","purl"]));