function solution(A, B) {
    let arr = [...A];
    
    for(let i = 0; i < arr.length; i++){
        // A와 B가 같으면 i 반환
        if(A === B) return i;
        else{
            // arr 배열의 마지막 요소를 배열 맨 앞에 추가함
            arr.unshift(arr.pop());
            // arr 배열을 문자열로 만들고 B와 비교하여 같다면 result 반환
            if(arr.join('') === B) 
                return i + 1;
        }
    }
    // B가 될 수 없으면 -1 반환
    return -1;
}