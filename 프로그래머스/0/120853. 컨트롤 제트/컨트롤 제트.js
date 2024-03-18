function solution(s) {
    var answer = 0;
    
    let numbers = [];
    let collectNumber = '';
    for(let i=0; i < s.length; i++){
        const item = s[i];
        if(item === 'Z'){
            numbers.pop();
        } else if ( item === ' ') {
            numbers.push(Number(collectNumber));
            collectNumber = '';
        } else{
            collectNumber += item;
        }
    }
    if(collectNumber !== ''){
        numbers.push(Number(collectNumber));
    }
    
    let sum = 0;
    for(let i=0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

// 1. -, 0~9 사이 숫자
// 2. Z
// 3. 공백