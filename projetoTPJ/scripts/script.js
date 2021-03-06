// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var num1, num2, num3, num4, num5, num6, num7;

num1 = Patches.outputs.getScalar('num1');
num2 = Patches.outputs.getScalar('num2');
num3 = Patches.outputs.getScalar('num3');
num4 = Patches.outputs.getScalar('num4');
num5 = Patches.outputs.getScalar('num5');
num6 = Patches.outputs.getScalar('num6');
num7 = Patches.outputs.getScalar('num7');

var final1, final2, final3, final4, final5, final6, final7 = 0;

var finalText1, finalText2, finalText3, finalText4, finalText5, finalText6, finaltext7 = "";

Promise.all([
    Scene.root.findFirst('Lifespan1') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext1 = results[0];

    num1.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final1 = newValue;
        })
    })

    Patches.outputs.getScalar('num1').then(patchValue => {
    scoretext1.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan2') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext2 = results[0];

    num2.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final2 = newValue;
        })
    })

    Patches.outputs.getScalar('num2').then(patchValue => {
    scoretext2.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan3') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext3 = results[0];

    num1.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final3 = newValue;
        })
    })

    Patches.outputs.getScalar('num3').then(patchValue => {
    scoretext3.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan4') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext4 = results[0];

    num1.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final4 = newValue;
        })
    })

    Patches.outputs.getScalar('num4').then(patchValue => {
    scoretext4.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan5') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext5 = results[0];

    num1.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final5 = newValue;
        })
    })

    Patches.outputs.getScalar('num5').then(patchValue => {
    scoretext5.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan6') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext6 = results[0];

    num1.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final6 = newValue;
        })
    })

    Patches.outputs.getScalar('num6').then(patchValue => {
    scoretext6.text = patchValue.toString(); // passa o valor pro texto
    });
})

Promise.all([
    Scene.root.findFirst('Lifespan7') // procura texto
    ]).then(function(results){ // so quando achar, executa isso
    const scoretext7 = results[0];

    num1.then(val=>{
        val.monitor().subscribe(({newValue}) => {
            final7 = newValue;
        })
    })

    Patches.outputs.getScalar('num7').then(patchValue => {
    scoretext7.text = patchValue.toString(); // passa o valor pro texto
    });
})