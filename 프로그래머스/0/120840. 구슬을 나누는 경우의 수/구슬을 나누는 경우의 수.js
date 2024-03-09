function solution(balls, share) {
    var answer = 1;
    var side = balls - share;
    var divMom = 1;     // 분모
    var divSon = 1;     // 분자

    if ( side !== 0) {
        while (side > 0) {
            divMom *= balls;
            divSon *= side;
            balls--;
            side--;
        }
        answer = divMom / divSon;
        return parseInt(answer);
    }

    return answer;
}