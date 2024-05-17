function solution(s) {
    let answer = [];
    let capitalArr = [];
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if ( s[i] >= 'a' && s[i] <= 'z'){
            answer.push(String(s[i]));
        }
        else {
            capitalArr.push(s[i]);
        }
    }
    capitalArr = capitalArr.sort().reverse().join("");
    answer = answer.sort().reverse().join("");
    return answer + capitalArr;
}