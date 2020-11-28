const Scene = require('Scene');
const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var katakana = ['か','ｷ','ｸ','ｹ','ｺ','ﾀ','ﾁ','ﾂ','ﾃ','ﾄ','ﾅ','ﾆ','ﾇ','ﾈ','ﾉ','ｻ','ｼ','ｽ','ｾ','ｿ','ｱ','ｲ','ｳ','ｴ','ｵ','ｦ','ﾝ','ﾜ','ﾗ','ﾘ','ﾙ','ﾚ','ﾛ','ﾔ','ﾕ','ﾖ','ﾏ','ﾐ','ﾑ','ﾒ','ﾓ','ﾊ','ﾋ','ﾌ','ﾍ','ﾎ'];

var letra1, letra2, letra3, letra4, letra5; 

// variaveis q vao pegar os componentes 'texto'
letra1 = Patches.outputs.getString('letra1');
letra2 = Patches.outputs.getString('letra2');
letra3 = Patches.outputs.getString('letra3');
letra4 = Patches.outputs.getString('letra4');
letra5 = Patches.outputs.getString('letra5');

Promise.all([
    Scene.root.findFirst('letra1') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext = results[0]; 

    const random = Math.floor(Math.random() * katakana.length);
    scoretext.text = katakana[random].toString(); // passa o valor pro texto
})

Promise.all([
    Scene.root.findFirst('letra2') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext = results[0];

    const random = Math.floor(Math.random() * katakana.length);
    scoretext.text = katakana[random].toString(); // passa o valor pro texto
})

Promise.all([
    Scene.root.findFirst('letra3') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext = results[0];

    const random = Math.floor(Math.random() * katakana.length);
    scoretext.text = katakana[random].toString(); // passa o valor pro texto
})

Promise.all([
    Scene.root.findFirst('letra4') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext = results[0];

    const random = Math.floor(Math.random() * katakana.length);
    scoretext.text = katakana[random].toString(); // passa o valor pro texto
})

Promise.all([
    Scene.root.findFirst('letra5') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext = results[0];

    const random = Math.floor(Math.random() * katakana.length);
    scoretext.text = katakana[random].toString(); // passa o valor pro texto
})