function solution(balls, share) {
    var answer = 1;
    var side = balls - share;
    var a = balls - share;
    var divMom = 1;
    var divSon = 1;

    if (a !== 0) {
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