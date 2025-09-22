function solution(arr)
{
    let compareNum = arr[0];
    let answer = [];

    for(let i = 0; i < arr.length; i++){
        if(compareNum == arr[i+1]){
            continue;
        } else {
            answer.push(compareNum);
            compareNum = arr[i+1];
        }
    }
    
    return answer;
}