function solution(babbling) {
    var answer = 0;
    const a = ["aya", "ye", "woo", "ma"];
    
    //발음해야 할 문자열 순회
    babbling.forEach(ba => {
        // 발음 가능한 문자열 순회
        a.forEach(a => {
            // 발음할 수 있는 문자열이라면?
            if(ba.includes(a)) {
                // split을 통해 문자열을 쪼개고 공백을 포함시켜 합침
                ba = ba.split(a).join(' ');
            }
        })
        
        //공백을 제외한 문자열의 길이가 0이라면 카운트
            if(ba.trim().length === 0) answer++;
    })
    return answer;
}