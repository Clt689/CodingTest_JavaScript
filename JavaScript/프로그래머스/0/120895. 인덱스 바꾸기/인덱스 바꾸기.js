function solution(my_string, num1, num2) {
    var answer = '';

    answer = my_string.split('');
    
    // 구조 분해 할당은 배열 or 객체에서 사용
    [ answer[num1], answer[num2] ] = [ answer[num2], answer[num1] ];
    
    answer = answer.join('');
    return answer;
}