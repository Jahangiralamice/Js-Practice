console.log('First Output Inside the Global Execution cotext');
function fn1() {
    setTimeout(() => {
        console.log('Inside function fn1 with the SetTimeout of 3 seconds')
    }, 3000)
}

function fn2() {
    console.log('inside function fn2')
}

setTimeout(() => {
    console.log('Inside the Global Execution context With SetTimeout of 10 seconds')
}, 10000)

setTimeout(() => {
    console.log('Inside the Global Execution context With SetTimeout of 3 seconds')
}, 3000);

fn1();
fn2();
fn3();

function fn3() {
    console.log('Inside function fn3')
}

console.log('Last line Output of Global Execution Context');
