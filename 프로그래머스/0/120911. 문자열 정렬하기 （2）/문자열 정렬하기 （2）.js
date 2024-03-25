function solution(my_string) {
    let result = '';
    for(let i=0; i < my_string.length; i++){
        result += my_string[i].toLowerCase();
    }
    return result.split("").sort().join("");
}