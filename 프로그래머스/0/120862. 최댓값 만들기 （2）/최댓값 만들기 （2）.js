function solution(numbers) {
    let maxNum = -99999999999;
    for(let i=0; i < numbers.length; i++){
        for(let j=i+1; j < numbers.length; j++){
            if( numbers[i] * numbers[j] >= maxNum){
                maxNum = numbers[i] * numbers[j];
            }
            console.log(numbers[i] * numbers[j]);
        }
    }
    return maxNum;
}