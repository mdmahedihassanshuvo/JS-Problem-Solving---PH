function findSecondSmallest(numbers) {
    if (numbers.length < 2) {
      throw new Error("The array should contain at least two numbers.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of numbers) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  }
  
  // Test cases
  const array1 = [5, 2, 10, 8, 3];
  console.log(findSecondSmallest(array1)); 
  
  const array2 = [1, 1, 1, 1, 1];
  console.log(findSecondSmallest(array2));
  