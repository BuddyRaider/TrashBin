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
				output = [];
				data = data.split(" ");
				for (let j=0; j<data.length; j++) {
					output.push(fromBin(data[j]));
				}
				process.stdout.write(output.join(" "));
				break;
			case 3:
				output = [];
				data = data.split(" ");
				for (let j=0; j<data.length; j++) {
					output.push(String.fromCharCode(fromBin(data[j])));
				}
				process.stdout.write(output.join(""));
				break;
			case 4:
				output = [];
				data = data.split(" ");
				for (let j=0; j<data.length; j++) {
					output.push(toBin(data[j]));
				}
				process.stdout.write(output.join(" "));
				break;
			case 5:
				output = [];
				data = data.split("");
				for (let j=0; j<data.length; j++) {
					output.push(toBin(data[j].charCodeAt(0)));
				}
				process.stdout.write(output.join(" "));
				break;
			case 6:
				if (data in codeVars) {
					process.stdout.write(codeVars[data].toString());
				} else {
					process.stdout.write("Error: Undefined Variable, Line " + (i + 1));
				}
				break;
			case 7:
				// read+print file
				break;
			case 8:
				data = data.split(" ");
				codeVars[data[0]] = data.slice(1).join(" ");
				break;
			case 9:
				output = [];
				data = data.split(" ");
				dataVar = data[0];
				data = data.slice(1);
				for (let j=0; j<data.length; j++) {
					output.push(fromBin(data[j]));
				}
				codeVars[dataVar] = output.join(" ");
				break;
			case 10:
				output = [];
				data = data.split(" ");
				dataVar = data[0];
				data = data.slice(1);
				for (let j=0; j<data.length; j++) {
					output.push(String.fromCharCode(fromBin(data[j])));
				}
				codeVars[dataVar] = output.join("");
				break;
			case 11:
				output = [];
				data = data.split(" ");
				dataVar = data[0];
				data = data.slice(1);
				for (let j=0; j<data.length; j++) {
					output.push(toBin(data[j]));
				}
				codeVars[dataVar] = output.join(" ");
				break;
			case 12:
				output = [];
				data = data.split(" ");
				dataVar = data[0];
				data = data.join(" ").split("").slice(1);
				for (let j=0; j<data.length; j++) {
					output.push(toBin(data[j].charCodeAt(0)));
				}
				codeVars[dataVar] = output.join(" ");
				break;
			case 13:
				data = data.split(" ");
				if (data[1] in codeVars) {
					codeVars[data[0]] = codeVars[data[1]];
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