function solution(order) {
    let count = 0;
    for(let i = 1; i <= 6; i++){
        console.log("before : " + order);
        if(order % 10 === 3 || order % 10 === 6 || order % 10 === 9){
            count++;
            order = parseInt(order/10);
            console.log("after : " + order);
            console.log("-------------");
        }
        else{
            order = parseInt(order/10);
            console.log("after : " + order);
            console.log("-------------");
        }
    }
    return count;
}