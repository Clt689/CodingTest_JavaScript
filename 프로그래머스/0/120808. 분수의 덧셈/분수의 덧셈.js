function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const num = numer1 * denom2 + numer2 * denom1;
    const denum = denom1 * denom2;
    
    let minNumber; // 작은 수 설정
    if (num < denum){
        minNumber = num;
    }
    else {
        minNumber = denum;
    }
    
    while(true){
        if (num % minNumber === 0){
            if(denum % minNumber === 0){
                return [num/minNumber, denum/minNumber];
                break;
            }
        }
        minNumber -= 1;
    }
    return answer;
}