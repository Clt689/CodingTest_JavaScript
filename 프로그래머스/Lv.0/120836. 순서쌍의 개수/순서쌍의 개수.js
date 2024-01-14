function solution(n) {
    var answer = 0;       // count 의미
    for ( let i = 1; i <= n; i++){
        if ( n % i == 0 ){
            answer++;
        }
    }
    return answer;
}