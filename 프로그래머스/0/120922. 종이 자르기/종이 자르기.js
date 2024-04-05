function solution(M, N) {
    let answer = 0;
    if ( M === N ){
        answer = M * N -1;
    }
    else{
        answer = M-1 + ( M * (N-1));
    }
    return answer;
}