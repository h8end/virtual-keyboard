const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 
    113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 
    97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 
    120, 99, 118, 98, 110, 109, 44, 46, 47, 32,];


// document.keypress = function (event) {
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// };

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i == 14 || i == 27 || i == 39) {
            out += '<div class = "clearfix"></div>';
        }
        out += '<div class="k-key" data = "' + keyboard[i] + '" >' +  String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('body').innerHTML = out;
}

init();

document.keydown = function (event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelector('body .k-key[data = "'+event.keyCode+'"]').classList.add('active');
};