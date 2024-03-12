function solution(n) {
    var answer = 0;
    let cnt = 0;
    for(let i=2; i <= n; i++){
        for(let j=1; j <= i; j++){
            if (i % j === 0){
                cnt++;
            }
            // else if(cnt >= 3){
            //     answer++;
            //     cnt = 0;
            // }
        }
        if(cnt >= 3){
            answer++;
        }
        cnt = 0;
    }
    return answer;
}
