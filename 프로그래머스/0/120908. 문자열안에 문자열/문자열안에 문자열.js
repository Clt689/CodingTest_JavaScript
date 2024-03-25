function solution(str1, str2) {
    let answer = 0;
    answer = str1.split(str2).join("");
    if( answer === str1){
        return 2;
    }
    else
        return 1;
}