function solution(price) {
    var answer = price;
    
    if ( price >= 100000 && price < 300000){
        answer = Math.floor(price * 0.95);
        console.log("5% 할인: ", answer);
    } else if ( price >= 300000 && price < 500000){
        answer = price * 0.9;
        console.log("10% 할인: ", answer);
    } else if ( price >= 500000 ){
        answer = price * 0.8;
        console.log("20% 할인: ", answer);
    }
    return answer;
}