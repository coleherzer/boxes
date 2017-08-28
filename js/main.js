function sayHello (name) {
    return 'Hello' + (name || ' anonymous person');
};

// console.log(sayHello(' Cole'));

// console.log(sayHello());

// Here, the parameter is name, and the argument ('Cole') is the value of the parameter in this case

// A perfect function is one line long because it does one thing really well

// console.log(sayHello);

// console.log(sayHello() + ' Cole');

function setH1 (string) {
    var h1 = document.querySelector('h1');
    h1.innerText = string;
};

// We would be able to use this function to change the inner text of h1 to any string we pass 

function  showGreeting () {
    setH1(sayHello(' Cole'));
};

var button = document.querySelector('button');
button.addEventListener('click', showGreeting);
// addEventListener is a method since button is an object
// The showGreeting is called a callback function because we arent calling the function yet but will call it upon click

// button.addEventListener('click', function() {
//     setH1(sayHello('BANANA!'));
// })
// The function here has no name and is called an anonymous function, here it works similar to the above function with showGreeting, but will display BANANA!







