function solution(n) {
    var answer = [];
    let cnt = 0;
    for(let i=2; i <= n; i++){
        
        for(let j=1; j <= i; j++){
            if(i % j === 0){
                cnt++;
            }
        }
        if(cnt <= 2 && n % i === 0){
            answer.push(i);
        }
        cnt = 0;
    }
    
    return answer;
}