// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var num1, num2, num3, num4, num5, num6, num7;

// variaveis q vao pegar os componentes 'texto'
num1 = Patches.outputs.getScalar('num1');
num2 = Patches.outputs.getScalar('num2');
num3 = Patches.outputs.getScalar('num3');
num4 = Patches.outputs.getScalar('num4');
num5 = Patches.outputs.getScalar('num5');
num6 = Patches.outputs.getScalar('num6');
num7 = Patches.outputs.getScalar('num7');

Promise.all([
    Scene.root.findFirst('Lifespan1') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num1.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan2') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num2.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan3') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num3.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan4') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num4.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan5') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num5.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan6') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num6.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan7') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num7.then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})