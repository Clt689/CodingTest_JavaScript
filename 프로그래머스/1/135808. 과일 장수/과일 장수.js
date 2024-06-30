function solution(k, m, score) {
    let sum = 0;
    score.sort((a,b) => b - a );
    let tempArr = [];
    let boxArr = [];
    for(let i=0; i < score.length; i++){
        tempArr.push(score[i]);
        if (tempArr.length === m){
            boxArr.push(tempArr);
            sum += Math.min(...tempArr) * m;
            tempArr = [];
        }
    }
    return sum;
}