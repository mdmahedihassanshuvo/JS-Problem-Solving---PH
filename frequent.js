function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (let element of arr) {
        frequencyMap[element] = (frequencyMap[element] || 0 ) + 1;
        if( frequencyMap[element] > maxFrequency ) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }
  
    return mostFrequentElement;
  }
  


const arr = [2, 3, 4, 2, 1, 2, 4, 3, 2];
const mostFrequent = findMostFrequentElement(arr);
console.log(mostFrequent);
