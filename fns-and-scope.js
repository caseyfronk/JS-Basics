//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
    if (name === 'Tyler') {
        return true;
    } else {
        return false;
    }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
    var promptName = prompt("Enter your name", name);
    return promptName;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
    var name = getName();
    alert("Welcome, " + name);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here a parameter is the value used when defining a function. An argument is the value passed to the funciton when invoking it.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here false values are false, 0, "", null, undefined and NaN. To check if something is falsy, use ! before it.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
    return "Casey";
}


//Now save the function definition of myName into a new variable called newMyName

function newMyName() {
    return myName();
}
//Now alert the result of invoking newMyName


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
    return myName();
}

//Now save the result of invoking outerFn into a variable called innerFn.

function innerFn() {
    return outerFn();
}
//Now invoke innerFn.
