(function(e,o){if(Math.random()>.3){return resolve({position:e,delay:o})}return reject(error)})(2,1500).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.77cf8357.js.map
