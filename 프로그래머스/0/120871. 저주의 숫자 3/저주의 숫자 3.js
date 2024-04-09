function solution(n) {
    let answer = [];
    let no3Arr = [];
    for(let i=0; i <= 200; i++){
        answer.push(String(i));
    }
    for(let i=0; i <= 200; i++){
        if (answer[i].indexOf("3") !== -1 || answer[i] % 3 === 0){
            continue;
        }
        else{
            no3Arr.push(answer[i]);
        }
    }
    console.log(no3Arr);
    return Number(no3Arr[n-1]);
}