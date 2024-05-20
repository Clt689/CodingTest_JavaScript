function solution(d, budget) {
    let sortedArr = d.sort((a,b) => a - b);
    console.log(sortedArr);
    let count = 0, sum = 0;
    for(let i = 0; i < sortedArr.length; i++){
        if ( sum < budget ){
            sum += sortedArr[i];
            count++;
        }
        else if ( sum === budget ){
            break;
        }
        else if ( sum > budget ){
            console.log("sum : " + sum);
            break;
        }
        else{
            count--;
            break;
        }
    }
    if ( sum > budget ){
        console.log("sum : " + sum);
        count--;
    }
    return count;
}