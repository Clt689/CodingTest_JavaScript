function solution(n, m) {
    let answer = [];
    let GCD = 1;
    let LCM = 0;
    for(let i = 1; i <= (n >= m ? n : m); i++){
        if ( n % i === 0 && m % i === 0){
            GCD = i;
        }
    }
    for(let i = (n >= m ? n : m); i <= (n * m); i++){
        if ( i % n === 0 && i % m === 0 ){
            LCM = i;
            break;
        }
    }
    answer.push(GCD);
    answer.push(LCM);
    return answer;
}