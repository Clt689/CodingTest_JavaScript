// Run by Node.js
const readline = require('readline');
function solution(input){
	let star = "";
	for(let i=1; i <= input; i++){
		for(let j=0; j < i; j++){
			star += "*";
		}
		console.log(star);
		star = "";
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		solution(line)
		rl.close();
	}
	
	process.exit();
})();
