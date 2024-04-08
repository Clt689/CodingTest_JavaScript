function solution(chicken) {
    let sum = 0;
    let service = 0;
    let coupon = chicken;
    while (true){
        service = parseInt(coupon/10);
        coupon = service + (coupon % 10);
        console.log("서비스:" + service + ", 쿠폰:" + coupon);
        sum += service;
        if(coupon < 10){
            break;
        }
    }
    return sum;
}