function solution(my_string) {
    var answer = 0;
    let sum = 0;
    for(let i=0; i < my_string.length; i++){
        if( my_string[i] >= 1 && my_string[i] <= 9){
            // answer.push(Number(my_string[i]));
            sum += Number(my_string[i]);
        }
    }
    return sum;
}