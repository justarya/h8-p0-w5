function sorting(arrNumber) {
  // code di sini
  var done = false;
  while(!done){
    done = true;
    for(let i=1;i<arrNumber.length;i++){
      if(arrNumber[i-1]>arrNumber[i]){
        done = false;
        let tmp = arrNumber[i-1];
        arrNumber[i-1] = arrNumber[i];
        arrNumber[i] = tmp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  
  if(arrNumber.length === 0){
    return "";
  }else{
    let lastNumber = arrNumber[arrNumber.length - 1];
    let count = 0;
    for(let i in arrNumber){
      if(lastNumber === arrNumber[i]){
        count++;
      }
    }
    return 'angka paling besar adalah '+lastNumber+' dan jumlah kemunculan sebanyak '+count+' kali';
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''