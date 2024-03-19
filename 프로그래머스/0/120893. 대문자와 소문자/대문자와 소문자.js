function solution(my_string) {
    var result = '';
    // var result = String.fromCharCode(my_string[0].charCodeAt() - 32);
    for(let i=0; i < my_string.length; i++){
        if( my_string[i].charCodeAt() >= 97 ){
            result += String.fromCharCode(my_string[i].charCodeAt() - 32);
        }
        else{
            result += String.fromCharCode(my_string[i].charCodeAt() + 32);
        }
    }
    return result;
}