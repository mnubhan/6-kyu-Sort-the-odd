function sortArray(array) {
  let oddArr = array.filter(x=>x%2!=0).sort((a,b)=>a-b)
  for(let i=0, j=0;i<array.length;i++){
    if(array[i]%2!=0){
      array[i]=oddArr[j]
      j++
    }
  }
  return array
}

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
