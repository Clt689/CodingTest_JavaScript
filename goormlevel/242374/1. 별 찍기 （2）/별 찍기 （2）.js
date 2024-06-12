// Run by Node.js
const readline = require('readline');

function solution(N){
	let star = "";
	for(let i = N; i >= 1; i--){
		for(let j = i; j >= 1; j--){
			star += "*";
		}
		console.log(star);
		star = "";
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		solution(line);
		rl.close();
	}
	
	process.exit();
})();
