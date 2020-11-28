// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var num1, num2, num3, num4;

num1 = Patches.outputs.getScalar('num1');
num2 = Patches.outputs.getScalar('num2');
num3 = Patches.outputs.getScalar('num3');
num4 = Patches.outputs.getScalar('num4');

var final1, final2, final3, final4 = 0;

var finalText1, finalText2, finalText3, finalText4 = "";

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







// Promise.all([
//     Scene.root.findFirst('Lifespan'),
// ]).then(function (results) {
    
//     const theText = results[0];
//     Patches.outputs.getScalar('num1').then(patchValue => {

//         // assign the .text property of 'theText' to the patchValue. 
//         // convert the patchValue scalar signal to a string using the .toString() method.
//         theText.text = patchValue.toString();

//     });

// });