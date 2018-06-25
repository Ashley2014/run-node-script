let runNodeScript=require('../index.js');

(async ()=>{
    await Promise.all([runNodeScript('./ascript1.js'),runNodeScript('./ascript2.js')])
    console.log('all')
})()