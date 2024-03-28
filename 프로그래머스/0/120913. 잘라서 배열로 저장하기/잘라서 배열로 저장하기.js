function solution(my_str, n) {
    let answer = [];
    let tempArr = [];  // n길이 만큼 저장해둘 임시 배열
    for(let i=0; i < my_str.length; i++){
        tempArr += my_str[i];         // 5, 11, 17
        if( tempArr.length === n ){              // 2, 5, 8
            answer.push(tempArr);
            tempArr = [];
        }
    }
    if ( tempArr.length != 0){
        answer.push(tempArr);
    }
    return answer;
}