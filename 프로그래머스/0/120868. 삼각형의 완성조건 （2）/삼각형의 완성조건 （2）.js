function solution(sides) {
    let count = 0; 
    let sortedArr = sides.sort((a,b) => a - b);
    let longestSides = sortedArr[1];
    for(let i=1; i <= longestSides; i++){  // sortedArr[1]이 가장 긴 변인 경우
        if ( i + sortedArr[0] > sortedArr[1] ){
            count++;
        }
    }
    
    // 남은 한 변이 가장 긴 변인 경우
    for(let i = longestSides + 1; i < sortedArr[0] + sortedArr[1]; i++){
        count++;
    }
    return count;
}