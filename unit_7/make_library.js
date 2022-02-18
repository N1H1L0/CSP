// link to project: https://studio.code.org/projects/applab/tdSnlFNWR186hIu6qm4kqd8nIfw_3-Vuq_lpEqzLtC0

// writes Fizz if divisable by 3 writes Buzz fi divisible by 5 wirtes FizzBuzz if divisible by both
// (min) - starting number of list to start replacing stuff
// (max) - ending number of list to end replacing stuff
// return - list replacing numbers for "Fizz", "Buzz", and "FizzBuzz" where appropriate
function FizzBuzz(min, max){
  var out = [];
  for( var i = min; i < max; i++){
    if(i%3===0 && i%5===0){
      appendItem(out, "Fizz");
    }
    else if (i%3===0){
      appendItem(out, "Buzz");
    }
    else if (i%5===0){
      appendItem(out,"FizzBuzz");
    }
    else{
      appendItem(out, i);
    }
  }
  return out;
}
console.log("FizzBuzz(0,100):");
console.log(FizzBuzz(0,100));

// list.sort() is O(n^2) when list is < 10 and has a space complexity of O(1) 
// otherwise it has a time conplexity of θ(nlog(n)) and a space complexity of O(log(n)) in V8 JS
// finds the median of 2 arrays
// (list1) - list of numbers
// (list2) - list of numbers 
// return - median of list1 and list2
function findMedianArrays(list1, list2){
  function median(sortedList){
    if((sortedList.length)%2 == 1){
      return sortedList[((sortedList.length/2) -0.5)];
    }
    else{
      return (sortedList[(sortedList.length/2)+ -1] + sortedList[(sortedList.length/2)])/2;
    }
  }
  function bubbleSortAscending(list){
    for(var i = 0; i < list.length; i++){
      for(var j = 0; j < list.length; j++){
        if(list[j] > list[j+1]){
          var temp = list[j+1];
          list[j+1] = list[j];
          list[j] = temp;
        }
      }
    }
    return list;
  }
  var sorted = bubbleSortAscending(list1.concat(list2));
  return median(sorted);
}
console.log("findMedianArrays([1,4,6], [2,5,3]):");
console.log(findMedianArrays([1,4,6], [2,5,3]));

// Sorts list to ascending values
// (list) - a list of numbers
// return - sorted list of ascending values
// time complexity of O(n^2)
function bubbleSortAscending(list){
  for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list.length; j++){
      if(list[j] > list[j+1]){
        var temp = list[j+1];
        list[j+1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}
console.log("bubbleSortAscending([3,2,4,2,3,5,6,2,3,4,643]):");
console.log(bubbleSortAscending([3,2,4,2,3,5,6,2,3,4,643]));

// Sorts list to decending values
// (list) - a list of numbers
// return - sorted list of decending values
// time complexity of O(n^2)
function bubbleSortDescending(list){
  for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list.length; j++){
      if(list[j] < list[j+1]){
        var temp = list[j+1];
        list[j+1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}
console.log("bubbleSortDescending([3,2,4,2,3,5,6,2,3,4,643]):");
console.log(bubbleSortDescending([3,2,4,2,3,5,6,2,3,4,643]));

// finds the median of a sorted list 
// (sortedList) - list sorted for smallest to greatest
// return - median of sorted list
function median(sortedList){
  if((sortedList.length)%2 == 1){
    return sortedList[((sortedList.length/2) -0.5)];
  }
  else{
    return (sortedList[(sortedList.length/2)+ -1] + sortedList[(sortedList.length/2)])/2;
  }
}
console.log("median(1,2,3]):");
console.log(median([1,2,3]));

// finds the average of a list 
// (list) - list of numbers
// return - average of the list
function avg(list){
  var total = 0;
  for(var i = 0; i < list.length; i++){
    total += list[i];
  }
  return total/list.length;
}
console.log("avg([10,10]):");
console.log(avg([10,10]));

