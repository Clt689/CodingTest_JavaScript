function solution(my_string) {
    
    let new_arr = [];
    new_arr = my_string.split(" ");

    let result = Number(new_arr[0]);
    for(let i=1; i < new_arr.length; i++){
        if ( new_arr[i] === "+" ){
            result += Number(new_arr[i+1]);
        }
        else if ( new_arr[i] === "-"){
            result -= Number(new_arr[i+1]);
        }
        console.log(result + " ");
    }
    return result;
}