function solution(box, n) {
    var answer = 1;
    
    box.forEach((length) => {
        answer *= Math.floor(length / n);
    })
    return answer;
}