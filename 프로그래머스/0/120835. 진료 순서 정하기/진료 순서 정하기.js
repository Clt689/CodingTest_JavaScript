function solution(emergency) {
    let newEmergencyArr = [];
    let cnt = 0;
    
    while(cnt < emergency.length){
        newEmergencyArr.push( {value:emergency[cnt], idx:cnt} )
        cnt = cnt + 1;
    }
    
    newEmergencyArr.sort((a,b) => b.value - a.value);
    
    var answer = new Array(emergency.length);
    
    cnt = 0;
    while(cnt < newEmergencyArr.length) {
        let item = newEmergencyArr[cnt];
        answer[item.idx] = cnt + 1;
        cnt = cnt + 1;
    }
    return answer;
}