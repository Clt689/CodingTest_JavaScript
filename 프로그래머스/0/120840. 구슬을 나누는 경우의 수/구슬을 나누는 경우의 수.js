function solution(balls, share) {
    var answer = 1;   // 1로 초기화
    var cnt = balls - share;
    var divMom = 1;   // 분모
    var divSon = 1;   // 분자

    while (cnt > 0) {
        divMom = divMom * balls;
        divSon = divSon * cnt;
        balls--;
        cnt--;
    }
    answer = Math.round(divMom / divSon);
    return answer;
}