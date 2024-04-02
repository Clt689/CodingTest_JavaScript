function solution(polynomial) {
    let answer = [];
    let xNum = 0;
    let constant = 0;
    answer = polynomial.split(" ");
    console.log(answer);
    for(let i=0; i < answer.length; i++){
        if(answer[i] > 0 && answer[i] < 100){
            constant += Number(answer[i]);
        }
        else if (answer[i] === "x"){
            xNum++;
        }
        else if ( answer[i].length === 2){
            xNum += Number(answer[i][0]);
        }
        else if ( answer[i].length === 3){
            xNum += Number(answer[i][0] * 10);
            xNum += Number(answer[i][1]);
        }
    }
    let result = '';
    result = xNum + "x + " + constant;
    if ( xNum !== 1 && constant === 0){
        result = xNum + "x";
    }
    else if ( xNum === 0 ){
        result = String(constant);
    }
    else if ( xNum === 1 && constant === 0 ){
        result = "x";
    }
    else if ( xNum === 1 && constant !== 0 ){
        result = "x + " + constant;
    }
    return result;
}