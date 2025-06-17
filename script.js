const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const uniqueArr = [...new Set(arr)]; // Remove duplicates
    if (uniqueArr.length < 2) return null;
    uniqueArr.sort((a, b) => b - a);     // Descending sort
  
	return uniqueArr[1]; 
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
