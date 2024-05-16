function solution(price, money, count) {
    let answer = -1;
    let sum = 0;
    for(let i = 1; i <= count; i++){
        sum += price * i;
    }
    if ( sum <= money ){
        answer = 0;
    }
    else {
        answer = sum - money;
    }

    return answer;
}