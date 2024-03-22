function solution(s) {
    let result = [];
    let arr = "";
    
    let cnt = 0;
    arr = s.split("");
    
    for(let i=0; i < s.length; i++){
        for(let j=0; j < s.length; j++){
            if( arr[i] === arr[j] ){
                cnt++;
            }
        }
        if (cnt === 1){
            result.push(arr[i]);
        }
        cnt = 0;
    }
    result.sort();
    return result.join("");
}