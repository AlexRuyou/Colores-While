var colores = document.getElementById('colores');

var r = 0;
var g = 0;
var b = 0;

while(r < 16){
	while(g < 16){
		while(b < 16){
			console.log("#" + toHex(r) + toHex(r) + toHex(g) + toHex(g) + toHex(b) + toHex(b) );
			colores.innerHTML = colores.innerHTML + '<div class="box" style="background: #'+toHex(r) + toHex(r) + toHex(g) + toHex(g) + toHex(b) + toHex(b)+'"></div>'
			b++;
		}
		b = 0;
		g++;
	}
	g = 0;
	r++;
}

function toHex(d) { // si le pasa un numero te lo convierte en hexadecimal
    return  (""+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// #000000 
// #0000ff
// 