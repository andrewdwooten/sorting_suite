// function bubbleSort(data){
//   data.sort(function(a,b){
//     return a - b;
//   });
//   return data;
// };

function bubbleSort(data){
	do{
		switched = false;
		for(var i = 0; i < data.length -1; i++){
			if (data[i] > data[i+1]) {
				var previous = data[i];
				data[i] = data[i+1];
				data[i+1] = previous;
				switched = true;
            }
        }
    } while (switched);
return data;
}

module.exports = bubbleSort
