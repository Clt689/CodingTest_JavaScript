function solution(array) {
    let answer = [];
    let maxNum = array[0];
    let index = 0;
    for(let i=0; i < array.length; i++){
        if(maxNum < array[i+1]){
            maxNum = array[i+1];
            index = i+1;
        }
        else{
            continue;
        }
    }
    answer.push(maxNum);
    answer.push(index);
    return answer;
}