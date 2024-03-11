function solution(numbers, direction) {
    var answer = [];
    let temp = 0;
    for(let i=0; i < numbers.length - 1; i++){
        if (direction === "right"){
            answer[i+1] = numbers[i];
            answer[0] = numbers[numbers.length-1];
        } else if (direction === "left"){
            answer[i] = numbers[i+1];
            answer[0] = numbers[1];
            answer[numbers.length-1] = numbers[0];
        }
    }
    return answer;
}