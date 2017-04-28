function insertionSort(data){
  sorted = []
  data.forEach(function(letter){
    if(sorted.length == 0){
      sorted.push(letter)
    }
    else {
      for(var i = sorted.length - 1; i != -1; i--){
        if (sorted[i] < letter){
          sorted.splice(i + 1, 0, letter);
            { break; }
        }
		    else if(i == 0 && sorted[i] > letter){
			     sorted.splice(i,0,letter);
        }
      }
    }
  });
  return sorted;
};

module.exports = insertionSort
