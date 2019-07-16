async function asyncFunction() {
    console.time('asyncFunction total executing:');
    const sleep1 = await sleep(2000);
    console.log('sleep1: ' + sleep1);
    const [sleep2, sleep3, sleep4]= await Promise.all([sleep(2000), sleep(1000), sleep(1500)]);
    console.log('sleep2: ' + sleep2);
    console.log('sleep3: ' + sleep3);
    console.log('sleep4: ' + sleep4);
    const sleepRace = await Promise.race([sleep(3000), sleep(1000), sleep(1000)]);
    console.log('sleep race: ' + sleepRace);
    console.timeEnd('asyncFunction total executing:');
    
    return 'asyncFunction done.'  // 这个可以不返回，这里只是做个标记，为了显示流程
}

asyncFunction().then(data => {
    console.log(data);       // asyncFunction return 的内容在这里获取
}).catch(error => {
    console.log(error);      // asyncFunction 的错误统一在这里抓取
});

console.log('after asyncFunction code executing....'); 