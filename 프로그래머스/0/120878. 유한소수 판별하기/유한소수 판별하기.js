function solution(a, b) {
    let result = 0;
    let GCD = 1;
    let arr = [];
    for(let i=1; i <= a; i++){
        if ( a % i === 0 && b % i === 0){
            GCD = i;
        }
    }
    if ( GCD !== 1 ){
        a /= GCD;
        b /= GCD;
    }
    
    for(let i=0; i <= 10; i++){
        for(let j=0; j <= 5; j++){
            if ( (2**i) * (5**j) <= 1000 ){
                arr.push( (2**i) * (5**j) );
            }
        }
    }
    console.log(arr);
    if ( arr.includes(b) ){
        result = 1;
    }
    else {
        result = 2;
    }
    return result;
}