function solution(spell, dic) {
    let result = 2;
    let tempArr = [];
    let count = 0;
    for( let i=0; i < dic.length; i++){
        if( spell.length === dic[i].length ){
            tempArr.push(dic[i]);
        }
    }
    console.log(tempArr);
    console.log(spell);
    for( let i=0; i < tempArr.length; i++){
        for(let j=0; j < spell.length; j++){
            if ( tempArr[i].indexOf(spell[j]) !== -1 ){
                count++;
                if(count === spell.length){
                    result = 1;
                    break;
                }
            }
        }
        count = 0;
    }
    return result;
}