function solution(num, k) {
    var answer = '';
    let result = -1;
    answer = num.toString();
    
    for(let i=0; i < answer.length; i++){
        if ( Number(answer[i]) === k ){
            result = i+1;
            break;
        }
    }
    return result;
}