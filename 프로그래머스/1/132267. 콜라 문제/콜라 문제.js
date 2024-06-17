function solution(a, b, n) {
    let result = 0;
    while (true){
        result += parseInt(n/a) * b;
        n = n - ( parseInt(n/a) * a ) + parseInt(n/a) * b;
        if (n < a){
            break;
        }
    }
    return result;
    
}