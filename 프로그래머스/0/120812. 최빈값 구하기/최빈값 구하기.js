function solution(array) {
    let sortedArray = array.sort((a,b) => a - b);
    let cnt = 0;
    
    let choi = -1;        // 초기값 = 등장할 수 없는 값
    let choiRepeat = 0;   // 최빈값이 몇번 반복해서 된건지?
    let repeatCnt = 0;    // 현재, 똑같은 숫자가 몇번 등장했는지
    let beforeNum = -1;   // 지금 보고있는 숫자 이전 숫자
    let isDupChoi = false;
    while(cnt < array.length){
        if(beforeNum !== array[cnt]){
            repeatCnt = 1;
        }
        else{
            repeatCnt++;
        }
        if(repeatCnt === choiRepeat){
            if(choi !== array[cnt]){
                isDupChoi = true;
            }
        }
        
        if(repeatCnt > choiRepeat){
            choi = array[cnt];
            choiRepeat = repeatCnt;
            isDupChoi = false;
        }
        beforeNum = array[cnt];
        cnt = cnt + 1;
    }
    if(isDupChoi) return -1;
    return choi;
}

// 1. 앞에서부터 차례대로 원소를 확인하며 개수 센다.
// 2. 최빈값을 그때그때 기록한다.