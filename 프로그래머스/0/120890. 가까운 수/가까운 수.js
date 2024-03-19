function solution(array, n) {
    let answer = 0;
    let minAbs = 999999;
    
    const sortedArray = array.sort((a,b) => a - b);
    console.log(sortedArray);
    for(let i=0; i < sortedArray.length; i++){
        const item = sortedArray[i];
        if(minAbs > Math.abs(n - item)){
            minAbs = Math.abs(n - item);
            answer = item;
        }
    }
    return answer;
}