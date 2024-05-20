function solution(s) {
    let answer = "";
    let index = 0;
    for(let i=0; i < s.length; i++){
        if ( s[i] !== " " ){
            if ( index % 2 === 0){
                answer += s[i].toUpperCase(); 
                index++;
            }
            else{
                answer += s[i].toLowerCase();
                index++;
            }
        }
        else{
            index = 0;
            answer += " ";
        }
    }
    return answer;
}