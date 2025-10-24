function solution(array) {
    var answer = 0;
    
    // 1. array를 크기 순으로 정렬 => sort()
    array.sort((a,b) => a - b);
    
    // 2. answer = 중앙값의 인덱스
    return array[Math.floor(array.length/2)];
}