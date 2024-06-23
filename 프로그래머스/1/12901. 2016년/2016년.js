function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let answer = weekDay[5];
    let sum = 0;
    for(let i=0; i < a-1; i++){
        sum += month[i];
    }
    sum += b-1;
    sum = sum % 7;
    answer = weekDay[ (5+sum) % 7];
    return answer;
}