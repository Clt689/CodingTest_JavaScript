function solution(n) {
    let sum = 1;
    let cnt = 1;
    while (sum <= n){
        sum = sum * (cnt+1);
        cnt++;
        
        if( sum > n){
            break;
        }
    }
    return cnt-1;
}