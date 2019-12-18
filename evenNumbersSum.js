function evenNumbersSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            sum+=arr[i];
            
        }
    }
    console.log(sum);
    return arr;
}

evenNumbersSum([4,3,1,2,5,10,6,7,9,8]);