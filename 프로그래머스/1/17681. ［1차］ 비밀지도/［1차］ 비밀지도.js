function solution(n, arr1, arr2) {
    let newArr1 = [];
    let newArr2 = [];
    let answer = [];
    let tempArr = "";
    for(let i=0; i < arr1.length; i++){
        newArr1.push(arr1[i].toString(2).split(''));
        newArr2.push(arr2[i].toString(2).split(''));
        if ( newArr1[i].length < n){
            while(true){
                newArr1[i].unshift("0");
                if ( newArr1[i].length === n){
                    break;
                }
            }
        }
        if (newArr2[i].length < n){
            while(true){
                newArr2[i].unshift("0");
                if ( newArr2[i].length === n){
                    break;
                }
            }
        }
    }
    for(let i=0; i < n; i++){
        for(let j=0; j < n; j++){
            if ( newArr1[i][j] === "1" || newArr2[i][j] === "1"){
                tempArr += "#";
            }
            else{
                tempArr += " ";
            }
        }
        if ( tempArr.length === n){
            answer.push(tempArr);
            tempArr = "";
        }
    }
    return answer;
}