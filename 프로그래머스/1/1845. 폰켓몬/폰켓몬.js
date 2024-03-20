function solution(nums) {
    var answer = 0;
    answer = nums.sort((a,b) => a - b);
    console.log(answer);
    let cnt = 0;
    for(let i=0; i < nums.length; i++){
        if ( nums[i] !== nums[i+1] ){
            cnt++;
            if ( cnt === nums.length / 2){
                break;
            }
        }
        else if ( nums[i] === nums[i+1] ){
            continue;
        }
    }
    
    return cnt;
}