const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let ans = [];

	let left = 0;
	let sum = 0;
	let right = 0;
	for(right = 0; right < arr.length; right++) {
		sum += arr[right];
		if(sum > n) {
			let temp = [];
			while(left < right) {
				temp.push(arr[left]);
				sum -= arr[left];
				left++;
			}
			if(temp.length > 0)
				ans.push(temp);
		}
	}

	while(left < arr.length) {
		let temp = [];
		while(left < right) {
			temp.push(arr[left++]);
		}
		if(temp.length > 0)
			ans.push(temp);
	}

	return ans;
	
}

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
