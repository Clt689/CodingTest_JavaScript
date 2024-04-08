function solution(score) {
    let answer = [];
    let tempArr = [];
    let cnt = 1;
    for(let i=0; i < score.length; i++){
        tempArr[i] = score[i][0] + score[i][1]; 
    }
    for(let i=0; i < tempArr.length; i++){
        for(let j=0; j < tempArr.length; j++){
            if ( tempArr[i] < tempArr[j] ){
                cnt++;
            }
        }
        answer[i] = cnt;
        cnt = 1;
    }
    console.log(tempArr);
    return answer;
}