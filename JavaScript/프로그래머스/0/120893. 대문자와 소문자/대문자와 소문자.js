function solution(my_string) {
    let answer = '';
    
    for(let i = 0; i < my_string.length; i++){
        // 대문자일 때
        if ( my_string[i].charCodeAt() >= 65 && my_string[i].charCodeAt() <= 90 ){
            answer += my_string[i].toLowerCase();
        } 
        // 소문자일 때
        else if ( my_string[i].charCodeAt() >= 97 && my_string[i].charCodeAt() <= 122 ) {
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}