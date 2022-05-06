const fs = require("fs");

function toBin(x) {
	x = parseInt(x);
	let y = x;
	let s = "";
	let z;
	while (y > 0) {
		z = Math.floor(y % 2);
		y = Math.floor(y / 2);
		s = z.toString() + s;
	}
	return s;
	// alternate [...s].reverse().join("")
}

function fromBin(x) {
	x = x.toString().replace(/^0+/g, "").replace(" ", "");
	let l = x.split("");
	const lenL = l.length;
	let y = 0;
	for (i=0; i<lenL; i++) {
		y = Math.floor((2 * y) + parseInt(l[i]));
	}
	return y;
}

function run(code=[]) {
	codeLen = code.length;
	let codeVars = {"test": 213};
	for (let i=0; i<codeLen; i++) {
		code[i] = code[i].trim();
		if (!code[i] || code[i].startsWith("~")) {
			continue;
		}
		let instruction = fromBin(code[i].split(" ")[0]);
		let data = code[i].split(" ").slice(1).join(" ");
		let output = "";
		switch (instruction) {
			case 1:
				process.stdout.write(data);
				break;
			case 2:
				output = "";
				data = data.split(" ");
				for (let j=0; j<data.length; j++) {
					output += fromBin(data[j]);
				}
				process.stdout.write(output);
				break;
			case 3:
				output = "";
				data = data.split(" ");
				for (let j=0; j<data.length; j++) {
					output += String.fromCharCode(fromBin(data[j]));
				}
				process.stdout.write(output);
				break;
			case 4:
				output = "";
				data = data.split(" ");
				for (let j=0; j<data.length; j++) {
					output += toBin(data[j]) + " ";
				}
				process.stdout.write(output);
				break;
			case 5:
				output = "";
				data = data.split("");
				for (let j=0; j<data.length; j++) {
					output += toBin(data[j].charCodeAt(0)) + " ";
				}
				process.stdout.write(output);
				break;
			case 6:
				console.log("jdasfjkldjsakfeohgawgaesdgaerawgdg")
				if (data in codeVars) {
					process.stdout.write(codeVars[data]);
				} else {
					process.stdout.write("Error: Undefined Variable, Line " + (i + 1));
				}
				break;
			default:
				process.stdout.write("Error: Unexpexted Instruction, Line " + (i + 1));
		}
	}
}

function main(file=process.argv[2]) {
	let code = fs.readFileSync(file, "utf-8");
	//console.log(code.split("\n"));
	run(code.split("\n"));
}

main();