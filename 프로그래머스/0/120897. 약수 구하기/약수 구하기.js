function solution(n) {
    let answer = [];
    let cnt = 0;
    for(let i=1; i <= n; i++){
        if( n % i === 0){
            answer[cnt++] = i;
        }
    }
    return answer;
}