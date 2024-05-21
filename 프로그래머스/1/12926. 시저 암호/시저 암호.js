function solution(s, n) {
    let answer = '';
    for(let i=0; i < s.length; i++){
        if ( s[i] === " "){
            answer += " ";
        }
        else {
            if ( s[i].codePointAt() + n >= 91 && (s[i] >= "A" && s[i] <= "Z") ){
                answer += String.fromCharCode(s[i].codePointAt() + n - 26);
            }
            else if ( s[i].codePointAt() + n >= 123 && (s[i] >= "a" && s[i] <= "z") ){
                answer += String.fromCharCode(s[i].codePointAt() + n - 26);
            }
            else {
                answer += String.fromCharCode(s[i].codePointAt() + n);
            }
        }
    }
    return answer;
}