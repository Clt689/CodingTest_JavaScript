function solution(s) {
    let answer = { "one" : 1, "two" : 2, "three" : 3, "four" : 4, 
    "five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9, "zero" : 0};
    let result = "";
    let tempStr = "";
    for(let i=0; i <= s.length; i++){
        if ( s[i] >= "a" && s[i] <= "z") {
            tempStr += s[i];
            if ( tempStr in answer){
                console.log(tempStr);
                result += answer[tempStr];
                tempStr = "";
            }
        }
        else if ( s[i] >= "0" && s[i] <= "9" ){
            result += s[i];
        }
    }
    return Number(result);
}