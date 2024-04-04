function solution(bin1, bin2) {
    let answer = '';
    let result = '';
    let bin1Num = 0;
    let bin2Num = 0;
    for(let i = 0; i < bin1.length; i++){
        bin1Num += (2 ** (bin1.length-1-i)) * bin1[i];
    }
    for(let i = 0; i < bin2.length; i++){
        bin2Num += (2 ** (bin2.length-1-i)) * bin2[i];
    }
    answer = bin1Num + bin2Num;
    return answer.toString(2);
}