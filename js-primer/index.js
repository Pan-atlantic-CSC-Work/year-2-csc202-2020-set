var readline = require('readline'); //load the readline module into the runtime environment
//Next, create the input/output interface as required by readline module.
var readlineAsync = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Next, declare and define a function named recursiveReadLineAsync
function recursiveReadLineAsync() {
    readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function(answer) {
        console.log('You asked me to ' + answer)
        if (answer == 'exit') //Condition for terminating further self call
            return readlineAsync.close(); //quit the function if answer == exit
        recursiveReadLineAsync(); //No exit yet. Call self again to ask another question.
    });
};
kn
//Finally, invoke the defined function to start the recursion
recursiveReadLineAsync();