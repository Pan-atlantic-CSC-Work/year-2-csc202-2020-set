const logger = output => {
    console.log(output)
}
export const appName = "ES6 Review";
export const dummyFunction = () => {
    let feedback = "I am a dummy function"; //mutable variable
    feedback = "I am still a dummy function"; //value changed
    return feedback;
}
export default logger;


export const genericFunction = () => {
    //declare an object literal
    /*
    let personalInformation = {
            firstName: 'Pius',
            lastName: 'Onobhayedo',
            gender: 'Male',
            religion: 'Christianity (Catholic)',
            fathersName: 'John',
            mothersName: 'Patricia'
        }
        //deconstruct into new variables firstName, last name and otherPersonalInfo
    let { firstName, lastName, ...otherPersonalInfo } = personalInformation;
    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
    */

    let biodata = {
        personalInformation: {
            firstName: 'Pius',
            lastName: 'Onobhayedo',
            gender: 'Male',
            religion: 'Christianity (Catholic)',
            fathersName: 'John',
            mothersName: 'Patricia'
        },
        education: {
            highestQualificationObtained: 'PhD',
            institution: 'University of Navarra'
        },
        occupation: 'University Lecturer',
        skills: ['Programming', 'Teaching', 'Innovation', 'Talent management'],
        interestsAndHobbies: ['Tennis', 'Soccer Leagues', 'Tech Innovation News']
    };
    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation.
    let { personalInformation: { firstName, lastName }, occupation } = biodata; //makes firstName, lastName and occupation directly available as variables within our function.
    //deconstruct personalInformation and then the rest using the spread operator

    let { personalInformation, ...otherBiodata } = biodata; //makes personalInformation object directly available as a variable.The rest(using Spread operator) are made available as part of an object named otherBiodata
    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines as well for us
    return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data are available. For example: <br/><br/> Gender: ${personalInformation.gender}<br/> Religion: ${personalInformation.religion}<br/> Skills: ${otherBiodata.skills}<br/> Interests and Hobbies: ${otherBiodata.interestsAndHobbies}<br/> Education: Highest qualification obtained is ${biodata.education.highestQualificationObtained} from ${biodata.education.institution}<br/>`;
}

function multiplier() {
    var product = 1;
    if (arguments.length < 2) {
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x = 0; x < arguments.length; x++) {
        product = product * arguments[x];
    }
    return product;
}

export const genericFunction1 = (...numbers) => {
    var product = 1;
    if (numbers.length < 2) {
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for (let number of numbers) {
        product = product * number;
    }
    return product;
}

//kinda consufing FIGURE OUT LATER
export const genericFunction2 = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed.
    //Map the array of x into an array of {x,y} object, with the y value calculated each time.
    let coordinates = x.map((x) => {
            return { 'x': x, 'y': (m * x) + c };
        })
        /*loop through our array of {x,y} and prepare the output string to be returned. We can do this with the
    forEach() method of array object or use the
    for… of loop introduced in ES6 as shown below*/
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates) {
        let xy = `(${coordinate.x},${coordinate.y})`
        output += xy;
    }
    //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)
    //coordinates.forEach((coordinate)=>{
    // let xy = `(${coordinate.x},${coordinate.y})`;
    // output+=xy;
    //})
    return output;
}

const toTitleCase = (str) => {
    str.toLowerCase(); //first set the whole string to lowercase in case
    return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1); //replace the first character with its uppercase
}

export class Person {
    constructor(firstName, lastName, gender, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
    }

    getFirstName() {
        return toTitleCase(this.firstName)
    }
};

export class User extends Person {
    constructor(username, password, firstName, lastName, gender, height) {
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password;
    }
};


//static methods
export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);
    }
}