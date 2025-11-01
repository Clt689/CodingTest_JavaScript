function solution(my_string) {
    var answer = [];
    
    // 1. my_string에서 숫자인 것들만 뽑아서 answer에 넣기
    for(let i=0; i < my_string.length; i++){
        if (my_string[i] >= 0 && my_string[i] <= 9){
           answer.push(Number(my_string[i])); 
        }
    }

    // 2. answer에서 오름차순 sort()
    answer.sort((a,b) => a - b);
    
    return answer;
}