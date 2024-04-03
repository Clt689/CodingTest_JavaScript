function solution(my_string) {
    let result = 0;
    let temp = '';
    for(let i=0; i <= my_string.length; i++){
        if( my_string[i] >= 0 && my_string[i] < 10 ){
            temp += my_string[i];
        }
        else {
            result += Number(temp);
            temp = '';
        }
    }
    return result;
}