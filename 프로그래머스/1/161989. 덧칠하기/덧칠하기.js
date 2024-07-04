function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    for(var sections of section) {
        if (painted < sections) {
            answer++;
            painted = sections + m-1;
        }
    }
    return answer;
}