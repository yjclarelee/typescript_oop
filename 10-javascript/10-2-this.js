console.log(this);

function simpleFunc(){
    console.log(this);
}

// window.simpleFunc();

class Counter{
    count = 0;
    // increase = function(){
    //     console.log(this);
    // }
    increase = () => {
        console.log(this);
    }
}

const counter = new Counter();
counter.increase();
// const caller = counter.increase;
const caller = counter.increase.bind(counter);
caller(); // undefined -> Counter

class Bob{}
const bob = new Bob();
bob.run = counter.increase;
bob.run();// Bob
