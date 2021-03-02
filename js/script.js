const matrix_effect = document.querySelector("canvas");
const neo = matrix_effect.getContext("2d");
const morpheus = (matrix_effect.width = window.innerWidth);
const trinity = (matrix_effect.height = window.innerHeight);

var matrix = ['𓀀','𓀈','𓀐','𓀘','𓀠','𓀨','𓀰','𓀸','𓁀','𓁈','𓁐','𓁘','𓁚','𓁢','𓁪','𓁲','𓁶','𓁾',
			  '𓂆','𓂎','𓂖','𓂞','𓂦','𓂮','𓂰','𓃀','𓃈','𓃐','𓃒','𓃚','𓃢','𓃠','𓃪','𓃲','𓃺','𓃾',
			  '𓄆','𓄎','𓄖','𓄞','𓄦','𓄮','𓄶','𓄾','𓄿','𓅇','𓅏','𓅐','𓅘','𓅠',' ',' ',' ',
			  ' ',' ',' ',' ',' ',' ',' '];

let font = 30;
let col = morpheus / font;
let arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw_matrix() {
	neo.fillStyle = "rgba(244,164,96,.2)";
	neo.fillRect(0, 0, morpheus, trinity);
	neo.fillStyle = "#ffff00";
	neo.font = font + "px system-ui";
	for (let i = 0; i < arr.length; i++) {
		let txt = matrix[Math.floor(Math.random() * matrix.length)];
		neo.fillText(txt, i * font, arr[i] * font);
		if (arr[i] * font > trinity && Math.random() > 0.975) arr[i] = 0;
		arr[i]++;
	}
}

setInterval(draw_matrix, 123);

let filter = 'abcdefghijklmnopqrstuvwxyz';
function showHieroglyph(){
	$('#hieroglyph').html('');
	var str = $('#name').val();
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		if (filter.indexOf(str[i]) !== -1) {
			if (window.matchMedia("(orientation: portrait)").matches) {
				$('#hieroglyph').append(`<p><img src="img/${str[i]}.png" style="width:80px"></p>`);
			} else{
				$('#hieroglyph').append(`<img src="img/${str[i]}.png" style="width:80px">`);
			}
		}
	}
}

window.onresize = function (event) {
	showHieroglyph();
	morpheus = (matrix_effect.width = window.innerWidth);
	trinity = (matrix_effect.height = window.innerHeight);
	col = morpheus / font;
	arr = [];
	for (let i = 0; i < col; i++) arr[i] = 1;
	draw_matrix();
}

