function solution(s) {
    let answer = s.split('').reverse();
    let result = [];
    let count = 0;
    for(let i=0; i < s.length; i++){
        for(let j=i+1; j <= s.length; j++){
            count++;
            if( answer[i] === answer[j] ){
                result.push(count);
                count = 0;
                break;
            }
        }
        if ( count !== 0 ){
            result.push(-1);
            count = 0;
        }
    }
    return result.reverse();
}