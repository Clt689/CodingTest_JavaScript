function solution(num, total) {
    let answer = [];
    let midNum = 0;
    
    if ( total % num === 0 ){
        midNum = total / num;
        for(let i = midNum - parseInt(num/2); i <= midNum + parseInt(num/2); i++){
            answer.push(i);
        }
    }
    else {
        midNum = parseInt(total / num);  // 15일때 3, 33일때 5
        for(let i = midNum - (num/2 - 1); i <= midNum + (num/2); i++){
            answer.push(i);            
        }
    }
    return answer;
}