function solution(n) {
    let answer = n.toString(3).split("").reverse().join("");
    let sum = 0;
    for(let i = answer.length - 1; i >= 0; i--){
        sum += answer[i] * (3 ** (answer.length - 1 - i) );
        console.log(i);
    }
    return sum;
}