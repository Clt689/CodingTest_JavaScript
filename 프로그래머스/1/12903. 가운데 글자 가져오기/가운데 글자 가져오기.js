function solution(s) {
    let answer = '';
    if ( s.length % 2 === 0 ){   // 단어의 길이가 짝수라면,
        answer += s[(s.length/2) - 1];
        answer += s[(s.length/2)];
    }
    else {
        answer +=  s[(s.length-1) / 2];
    }
    return answer;
}