function solution(slice, n) {
    var answer = 0;
    if ( n % slice == 0 ){
        answer = n / slice;
    }
    else{
        answer = Math.floor(n/slice) + 1;
    }
    return answer;
}