function addNumbers() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    const returnedPromiseObj = addPositiveNumbersOnly(num1.value, num2.value);
    returnedPromiseObj.then(function (val) {
        console.log('then block');
        updateResult(val);
    })
        .catch(function (err) {
            console.log('catch block');
            updateResult(err);
        })
        .finally(function (val) {
            console.log('promise is concluded');
        });
    console.log('Returned promise Object is: ', returnedPromiseObj);
}

function updateResult(val) {
    let result = document.getElementById('result');
    result.value = val;
}

function addPositiveNumbersOnly(a, b) {
    return new Promise(function (resolve, reject) {
        const num1 = Number(a);
        const num2 = Number(b);
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            reject('invalid integer characters');
        }
        if (num1 <= 0 || num2 <= 0) {
            reject('negative numbers are not allowed')
        }

        resolve(num1 + num2);
    });
}
