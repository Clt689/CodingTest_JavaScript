function solution(nums) {
    let arr = [];
    let count = 0;    // 약수의 개수 ( = 약수가 2개면 소수)
    let result = 0;   // 정답 ( = 소수가 되는 경우의 수)
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i+1; j < nums.length - 1; j++){
            for(let k = j+1; k < nums.length; k++){
                arr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    for(let i=0; i < arr.length; i++){
        for(let j=1; j <= arr[i]; j++){
            if( arr[i] % j === 0){
                count++;
            }
        }
        if (count === 2){
            result++;
            count = 0;
        }
        count = 0;
    }
    return result;
}