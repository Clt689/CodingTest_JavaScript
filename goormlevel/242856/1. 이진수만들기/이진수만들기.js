// Run by Node.js
const readline = require('readline');
function solution(input){
	let answer = Number(input).toString(2);
	console.log(answer);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		solution(line);
		rl.close();
	}
	
	process.exit();
})();
