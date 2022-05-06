num = 100;

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
	x = x.toString().replace(/^0+/g, "");
	let l = x.split("");
	const lenL = l.length;
	let y = 0;
	for (i=0; i<lenL; i++) {
		y = Math.floor((2 * y) + parseInt(l[i]));
	}
	return y;
}