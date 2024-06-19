function solution(name, yearning, photo) {
    let answer = [];
    let sum = 0;
    for(let i=0; i < photo.length; i++){
        for(let j=0; j < photo[i].length; j++){
            for(let k=0; k < name.length; k++){
                if ( photo[i][j] === name[k] ){
                    sum += yearning[k];
                }
            }
        }
        answer.push(sum);
        sum = 0;
    }
    return answer;
}