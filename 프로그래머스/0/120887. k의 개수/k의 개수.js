function solution(i, j, k) {
    let result = 0;
    let numArr = '';
    for(let a = i; a <= j; a++){
        numArr += a;
    }
    for(let b = 0; b <= numArr.length; b++){
        if ( Number(numArr[b]) === k ){
            result++;
        }
    }
    return result;
}