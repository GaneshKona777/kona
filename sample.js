let p=Promise((resolve,reject) =>{
    let a=1+1;
    if(a==2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('This is in then block' +message);
}).catch((message) =>{
    console.log('This is in catch block' +message);
})