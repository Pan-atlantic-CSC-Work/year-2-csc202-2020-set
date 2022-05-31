//1
import logger, { Person, User, CustomMath, genericFunction, genericFunction1, genericFunction2, appName, dummyFunction } from './tools.js';
import fetch from "node-fetch";
/*
logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction()); 

//2

logger(genericFunction());

try {
    logger(genericFunction2(2, 3, 4, 5, 6)); //This will output 24 on the browser
} catch (error) {
    logger(error.message);
    /*The error message "Illegal arguments counts. Arguments must be greater than 1" will be
    output in browser
    if less than two arguments are passed.This is just
    for illustration, don’ t
    pass system error messages to client in this way. 
} 
*/

let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
let user1 = new User("myusername", "mypassword", "Pius", "Onobhayedo", "Male", undefined);

person1.firstName = "peter"; //here we have deliberately used lowercase for first letter

person2.firstName = "maria"; //here we have deliberately used lowercase for first letter

logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName

logger(CustomMath.sqrt(100));


/*
new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Timeout is over"); //send out a success feedback with data using resolve
        }, 1000) //set timeout for 1000ms i.e. 1second.
}).then((data) => {
    logger(`${data}`); //This should output "Timeout is over"
}).catch((error) => { //This will only be reached it the asynchronous function returned a reject statement.
    logger(`${error}`);
});
*/

//the above code can also be written as the one below
/*
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Timeout is over"); //send out a success feedback with data using resolve
        }, 1000) //set timeout for 1000ms i.e. 1second.
});
myPromise.then((data) => {
    logger(`${data}`); //This should output "Timeout is over"
});
myPromise.catch((error) => { //This will only be reached it the asynchronous function returned a reject statement.
    logger(`${error}`);
});
*/

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a < em > reject < /em> instead of a <em>resolve</em > !"); //send out a reject feedback
    }, 1000)
}).then((data) => {
    log(`${data}`); //This should output "Timeout is over"
}).catch((error) => { //This will only be reached it the asynchronous function returned a reject statement.
    log(`Error message received: ${error}`);
}).then(() => {
    log(`This function is executed after success or failure is returned`)
});


logger(`The username of ${user1.firstName} is ${user1.username}`)

*/

/* let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
fetch(url)
    .then(response => response.json()) //convert data returned to json
    .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
    .catch(error => logger(`Error: ${error}`));

const mySetTimeout = (milliseconds) => {
    return new Promise((resolve, reject) => {
        mySetTimeout(() => {
            resolve('Timeout is over again! I timed out for ${milliseconds} ms');
        }, milliseconds)
    })
}

mySetTimeout(2000)
    .then((data) => { logger(data) })
    .catch((error) => { logger(`Error found: ${ error }`) })

//try ... catch

*/
/*
let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())

Promise.all([fetch1, fetch2, fetch3]) //get the data for the three calls in an array.
    .then((data) => {
        logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`); //display data from array
    })

const promiseAwareTimeout = (milliseconds = 1000) => { //The function expects milliseconds to be passed. If not  passed, milliseconds parameter defaults to 1000
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using
                    resolve
                }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
        });
    }
    //define a function that uses our Promise executor
const usePromiseAwareTimeout = async(milliseconds) => {
    logger('About to call timeout')
    try {
        logger(await promiseAwareTimeout(milliseconds));
    } catch (error) {
        logger(error);
    }
};
//call the async function.
usePromiseAwareTimeout(3000);
*/
const addressees = ["John Uzo", "Mary Smart", "Paul Umoh"]
    /*
    addressees.map(addressee => {
        let message = `Dear ${addressee}, It is my pleasure to inform you that your admission letter is ready for collection`;
        logger(message);
    })
    */
    //a function named mailMerger that can take the list of adresses and the mail body to be sent to the addessses

function mailMerger(ad, body) {
    ad.map(addressee => {
        logger("Dear, " + addressee + " " + body);
    })
}

mailMerger(addressees, "It is my pleasure to inform you that your admission letter is ready for collection")