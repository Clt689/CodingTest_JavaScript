function solution(t, p) {
    let compareStr = "";
    let count = 0;
    if ( p.length >= 2 ){
        for(let i=0; i < t.length - (p.length - 1); i++){
            if ( t.slice(i, p.length + i) <= p ){
                count++;
            }
        }
    }
    else {
        for(let i = 0; i < t.length; i++){
            if ( t[i] <= p ){
                count++;
            }
        }
    }
    return count;
}