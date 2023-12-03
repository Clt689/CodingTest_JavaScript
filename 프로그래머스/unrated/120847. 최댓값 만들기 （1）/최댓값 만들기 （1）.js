function solution(numbers) {
    var answer = 0;
    var max = 0;
    numbers.sort((a,b) => a-b);
    answer = numbers[numbers.length-1] * numbers[numbers.length-2];
    return answer;
}