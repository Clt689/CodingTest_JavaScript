function solution(quiz) {
    let result = [];
    let checkArr = [];
    for(let i=0; i < quiz.length; i++){
        checkArr = quiz[i].split(" ");
        let sum  = Number(checkArr[0]);
        
        for(let j=1; j < checkArr.length - 2; j++){
            if ( checkArr[j] === "+" ){
                sum += Number(checkArr[j+1]);
            }
            else if ( checkArr[j] === "-" ){
                sum -= Number(checkArr[j+1]);
            }
            console.log(sum);
        }
        if ( sum === Number(checkArr[checkArr.length-1]) ){
            result[i] = "O";
        }
        else if (sum !== Number(checkArr[checkArr.length-1]) )
            result[i] = "X";
    }
    return result;
}