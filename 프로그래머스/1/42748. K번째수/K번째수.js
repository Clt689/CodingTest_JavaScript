function solution(array, commands) {
    let answer = [];
    let tempArr = [];
    for(let i=0; i < commands.length; i++){
        tempArr = array.slice( commands[i][0]-1, commands[i][1] ).sort((a,b) => a - b);
        answer.push(tempArr[commands[i][2]-1]);
    }
    return answer;
}