function solution(num_list) {
    var answer = [];
    var answer1 = [];
    var answer2 = [];
    for ( var i = 0; i < num_list.length; i++ ){
        if ( num_list[i] % 2 == 1 ){
            answer1.push(i);
        }
        else{
            answer2.push(i);
        }
    }
    answer[0] = answer2.length;
    answer[1] = answer1.length;
    return answer;
}