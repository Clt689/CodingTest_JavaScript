function solution(s) {
    let x = "";
    let count = 0;
    let answer = 0;
    for (const str of s) {
        if (!count) {  // count가 0일 때 즉, x와 x가 아닌 다른 글자가 나온 횟수가 같을 때.
            answer++;
            x = str;
        }
        str === x ? count++ : count--;
    }
    return answer;
}