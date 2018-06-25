## usage
```
let runNodeScript=require('run-node-script');

;(async ()=>{
    await Promise.all([
        runNodeScript('yourscript/script1.js'),
        runNodeScript('yourscript/script2.js'),
    ])
    console.log('all finish')
})();

```