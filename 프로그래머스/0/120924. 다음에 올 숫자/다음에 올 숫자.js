function solution(common) {
    let answer = 1;
    let rate = 0;
    
    if ( common[1] - common[0] === common[2] - common[1] ) { // 같으면 등차, 다르면 등비
        answer = common[common.length - 1] + common[1] - common[0];
    }
    else{
        answer = common[common.length - 1] * ( common[1] / common[0] );
    }
    return answer;
}