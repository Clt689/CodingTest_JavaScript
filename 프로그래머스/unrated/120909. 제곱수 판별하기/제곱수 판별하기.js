function solution(n) {
    var answer = Math.sqrt(n);
    
    return Number.isInteger(answer) ? 1 : 2;
}